document.addEventListener("DOMContentLoaded", () => {
  // 1. Security Headers Enforcement (Meta Fallback for Static Hosting)
  const ensureMetaHeader = (attrName, attrValue, content) => {
    let meta = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attrName, attrValue);
      meta.setAttribute("content", content);
      document.head.prepend(meta);
    }
  };

  ensureMetaHeader("http-equiv", "X-Content-Type-Options", "nosniff");
  ensureMetaHeader("name", "referrer", "strict-origin-when-cross-origin");
  ensureMetaHeader(
    "http-equiv",
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' data: https://cdn.jsdelivr.net https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:; object-src 'none'; upgrade-insecure-requests;"
  );

  // 2. Obfuscated Email Click Handler (Base64 User + Domain -> mailto:)
  document.addEventListener("click", (e) => {
    const emailTrigger = e.target.closest("[data-email-u][data-email-d]");
    if (!emailTrigger) return;
    e.preventDefault();
    try {
      const user = atob(emailTrigger.getAttribute("data-email-u") || "");
      const domain = atob(emailTrigger.getAttribute("data-email-d") || "");
      if (user && domain) {
        const addr = `${user}${String.fromCharCode(64)}${domain}`;
        window.location.href = `mailto:${addr}`;
      }
    } catch (_) {
      // Ignore malformed encoding
    }
  });

  // 3. Mobile (< 768px) People / Profile Card Vertical Stacking Enforcer
  const syncMobileProfileStacking = () => {
    const isMobile = window.innerWidth < 768;
    document.querySelectorAll(".post article .profile").forEach((card) => {
      if (isMobile) {
        card.style.setProperty("float", "none", "important");
        card.style.setProperty("display", "block", "important");
        card.style.setProperty("width", "100%", "important");
        card.style.setProperty("max-width", "300px", "important");
        card.style.setProperty("margin", "0 auto 1.25rem auto", "important");
      } else {
        card.style.removeProperty("float");
        card.style.removeProperty("display");
        card.style.removeProperty("width");
        card.style.removeProperty("max-width");
        card.style.removeProperty("margin");
      }
    });
  };
  syncMobileProfileStacking();
  window.addEventListener("resize", syncMobileProfileStacking, { passive: true });

  // 4. Table Theme & Bootstrap Classes
  const compatBootstrap = Boolean(window.alFolio && window.alFolio.compatBootstrap);
  const computedTheme =
    typeof window.determineComputedTheme === "function"
      ? window.determineComputedTheme()
      : document.documentElement.dataset.theme || "light";

  document.querySelectorAll("table").forEach((table) => {
    if (computedTheme === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    const insideExcludedParent =
      table.closest('[class*="news"]') ||
      table.closest('[class*="card"]') ||
      table.closest('[class*="archive"]') ||
      table.closest("pre") ||
      table.closest("code");

    if (!insideExcludedParent) {
      table.classList.add("table", "table-hover");
      table.parentElement?.classList.add("table-responsive");

      if (compatBootstrap) {
        table.setAttribute("data-toggle", "table");
      }
    }
  });

  // 5. Keep bottom footer only on the main page (/), remove from all other pages
  const footer = document.querySelector("footer.fixed-bottom, footer.sticky-bottom");
  if (footer) {
    const cleanPath = window.location.pathname.replace(/\/index\.html$/, "/");
    const isMainPage = cleanPath === "/" || cleanPath === "/al-folio/";

    if (!isMainPage) {
      footer.remove();
    } else {
      let hideFooterTimer = null;
      const getScrollTop = () =>
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      let lastScrollY = getScrollTop();

      const scheduleFooterHide = () => {
        if (hideFooterTimer) {
          clearTimeout(hideFooterTimer);
        }
        hideFooterTimer = setTimeout(() => {
          footer.classList.add("ylp-footer-hidden");
        }, 2000);
      };

      const showAndScheduleFooter = () => {
        const currentScrollY = getScrollTop();
        if (currentScrollY > lastScrollY + 1) {
          footer.classList.remove("ylp-footer-hidden");
        }
        lastScrollY = currentScrollY;
        scheduleFooterHide();
      };

      // Hide automatically 2 seconds after initial load
      scheduleFooterHide();

      window.addEventListener("scroll", showAndScheduleFooter, { passive: true });
      document.addEventListener("scroll", showAndScheduleFooter, { passive: true });
      window.addEventListener(
        "touchmove",
        () => {
          footer.classList.remove("ylp-footer-hidden");
          scheduleFooterHide();
        },
        { passive: true }
      );
      window.addEventListener("touchend", scheduleFooterHide, { passive: true });
    }
  }

  // 6. Upgrade #back-to-top circular button into a sleek upward arrow sign
  const upgradeBackToTopArrow = () => {
    const btn = document.getElementById("back-to-top");
    if (btn && !btn.dataset.ylpArrowUpgraded) {
      btn.dataset.ylpArrowUpgraded = "true";
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<path d="M12 20V5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M5.5 11.5L12 5L18.5 11.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M7.5 16.5L12 12L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>' +
        "</svg>";
    }
  };

  upgradeBackToTopArrow();
  window.addEventListener("load", upgradeBackToTopArrow);
  setTimeout(upgradeBackToTopArrow, 300);

  // 7. Ensure Navbar Brand Logo is present on all pages (left side of header)
  const ensureNavbarLogo = () => {
    const navContainer = document.querySelector("#navbar .container");
    if (!navContainer) return;

    let brand = navContainer.querySelector(".navbar-brand");
    const logoSrc = "/assets/img/Logo.png";

    if (!brand) {
      brand = document.createElement("a");
      brand.className = "navbar-brand title font-weight-lighter";
      brand.href = "/";
      brand.innerHTML = '<img src="' + logoSrc + '" alt="YPLab Logo" class="ylp-navbar-logo"><span class="font-weight-bold">Prof. Lim Yoon Pin</span>';
      navContainer.insertBefore(brand, navContainer.firstChild);
    } else {
      if (!brand.querySelector(".ylp-navbar-logo")) {
        const img = document.createElement("img");
        img.className = "ylp-navbar-logo";
        img.src = logoSrc;
        img.alt = "YPLab Logo";
        brand.insertBefore(img, brand.firstChild);
      }
    }
  };

  ensureNavbarLogo();
  window.addEventListener("load", ensureNavbarLogo);

  // 8. Dynamic Favicon cache-buster to ensure browser tab icon is always fresh
  const refreshFavicon = () => {
    const freshFaviconUrl = "/assets/img/Logo.png?v=20261103_2";
    const existingIcons = document.querySelectorAll("link[rel*='icon']");
    existingIcons.forEach((el) => {
      el.href = freshFaviconUrl;
    });

    if (existingIcons.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = freshFaviconUrl;
      document.head.appendChild(link);
    }
  };

  refreshFavicon();
  window.addEventListener("load", refreshFavicon);
});
