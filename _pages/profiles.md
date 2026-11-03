---
layout: page
permalink: /people/
title: people
description: Members of the Cancer Precision Medicine & Translational Oncology Laboratory (YPLab) at the Health Science Center, Ningbo University.
nav: true
nav_order: 6
---

<style>
  /* ==========================================================================
     YPLab - Interactive Academic "People" Webpage (Website Theme Adaptive)
     ========================================================================== */
  #search-toggle .nav-link {
    font-size: 0 !important;
  }
  #search-toggle .nav-link i {
    font-size: 1rem !important;
  }

  .post-header {
    text-align: center;
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .post-header .post-title {
    font-size: clamp(2rem, 3.8vw, 2.65rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.6rem;
    text-transform: capitalize;
  }
  .post-header .post-description {
    font-size: 1.02rem;
    color: var(--global-text-color-light);
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.65;
  }

  .ylp-people-wrapper {
    padding: 0.5rem 0 3rem 0;
  }

  /* Category Sections & Elegant Horizontal Dividers */
  .ylp-category-section {
    padding: 2.5rem 0;
  }
  .ylp-category-section:first-child {
    padding-top: 0.5rem;
  }
  .ylp-category-divider {
    position: relative;
    border: 0;
    height: 1px;
    margin: 0.75rem 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--global-divider-color) 15%,
      var(--global-theme-color) 50%,
      var(--global-divider-color) 85%,
      transparent 100%
    );
    opacity: 0.75;
  }

  .ylp-category-header {
    text-align: center;
    margin-bottom: 2.25rem;
  }
  .ylp-category-kicker {
    display: inline-block;
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--global-theme-color);
    background: rgba(38, 152, 186, 0.1);
    border: 1px solid rgba(38, 152, 186, 0.25);
    padding: 0.28rem 0.85rem;
    border-radius: 999px;
    margin-bottom: 0.65rem;
  }
  .ylp-category-title {
    font-size: clamp(1.45rem, 2.5vw, 1.85rem);
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0;
    letter-spacing: -0.01em;
  }

  /* Responsive Grids */
  .ylp-pi-grid {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }
  .ylp-pi-grid .ylp-person-card {
    width: 100%;
    max-width: 310px;
  }

  .ylp-team-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.65rem;
    align-items: stretch;
  }

  @media (max-width: 991.98px) {
    .ylp-team-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.35rem;
    }
  }
  @media (max-width: 639.98px) {
    .ylp-team-grid {
      grid-template-columns: 1fr;
      max-width: 320px;
      margin: 0 auto;
      gap: 1.35rem;
    }
  }

  /* Interactive Member Card (High Image-to-Card Ratio, No Button) */
  .ylp-person-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 16px;
    padding: 0.85rem 0.85rem 1.2rem;
    cursor: pointer;
    transition:
      transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.28s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.28s ease;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    user-select: none;
  }
  .ylp-person-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--global-theme-color);
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: 2;
  }
  .ylp-person-card:hover,
  .ylp-person-card:focus-visible {
    transform: translateY(-6px);
    border-color: var(--global-theme-color);
    box-shadow: 0 14px 32px rgba(0, 0, 0, 0.22);
    outline: none;
  }
  .ylp-person-card:hover::before,
  .ylp-person-card:focus-visible::before {
    opacity: 1;
  }

  /* Card Photo Frame - Large Ratio Filling Card Width */
  .ylp-card-photo-wrap {
    width: 100%;
    aspect-ratio: 4 / 4.7;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
    transition: border-color 0.25s ease;
    flex-shrink: 0;
  }
  .ylp-person-card:hover .ylp-card-photo-wrap {
    border-color: var(--global-theme-color);
  }
  .ylp-card-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.35s ease;
  }
  .ylp-person-card:hover .ylp-card-photo {
    transform: scale(1.04);
  }

  /* Card Typography */
  .ylp-card-name {
    font-size: 1.06rem;
    font-weight: 700;
    color: var(--global-text-color);
    line-height: 1.35;
    margin: 0 0 0.3rem 0;
    padding: 0 0.25rem;
  }
  .ylp-card-role {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--global-theme-color);
    line-height: 1.35;
    margin: 0 0 0.2rem 0;
  }
  .ylp-card-org {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    line-height: 1.4;
    margin: 0;
  }

  /* ==========================================================================
     Modal Popup Overlay (12-Col / 24% - 5% - 71% Split Layout)
     ========================================================================== */
  .ylp-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(8, 12, 20, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.25s ease, visibility 0.25s ease;
  }
  .ylp-modal-backdrop.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .ylp-modal-dialog {
    position: relative;
    width: 100%;
    max-width: 940px;
    max-height: 88vh;
    overflow-y: auto;
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    border: 1px solid var(--global-divider-color);
    border-top: 3px solid var(--global-theme-color);
    border-radius: 16px;
    padding: 2.25rem 2.25rem 2rem;
    box-shadow: 0 25px 65px rgba(0, 0, 0, 0.35);
    transform: translateY(18px) scale(0.96);
    transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, color 0.25s ease;
  }
  .ylp-modal-backdrop.is-open .ylp-modal-dialog {
    transform: translateY(0) scale(1);
  }

  /* Explicit Close Button ('X') */
  .ylp-modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    color: var(--global-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.05rem;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    z-index: 5;
  }
  .ylp-modal-close:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
    transform: rotate(90deg);
  }

  /* Strict 3-Column Modal Body: Left (24%), Center Divider (5%), Right (71%) */
  .ylp-modal-grid {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
  }

  /* Left Column: Profile Card & Info (24% width / col-span-3) */
  .ylp-modal-col-left {
    flex: 0 0 24%;
    max-width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.25rem 0.25rem;
  }

  /* Center Column: Vertical Gradient Divider (5% width / col-span-1) */
  .ylp-modal-col-divider {
    flex: 0 0 5%;
    max-width: 5%;
    display: flex;
    align-items: stretch;
    justify-content: center;
    padding: 0.25rem 0;
  }
  .ylp-modal-divider-line {
    width: 1.5px;
    height: 100%;
    min-height: 240px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      var(--global-divider-color) 15%,
      var(--global-theme-color) 50%,
      var(--global-divider-color) 85%,
      transparent 100%
    );
    border-radius: 999px;
  }

  /* Right Column: Biography Text (71% width / col-span-8) */
  .ylp-modal-col-right {
    flex: 0 0 71%;
    max-width: 71%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.25rem 0.85rem;
    box-sizing: border-box;
  }

  /* Profile Picture Centered at Top of Left Column */
  .ylp-modal-avatar-wrap {
    width: 100%;
    max-width: 175px;
    aspect-ratio: 4 / 4.7;
    margin: 0 auto 1rem auto;
    border-radius: 14px;
    overflow: hidden;
    border: 2px solid var(--global-theme-color);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.18);
    background: var(--global-bg-color);
    flex-shrink: 0;
  }
  .ylp-modal-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .ylp-modal-name {
    font-size: 1.12rem;
    font-weight: 800;
    color: var(--global-text-color);
    margin: 0 0 0.35rem 0;
    line-height: 1.32;
    text-align: center;
  }
  .ylp-modal-role {
    font-size: 0.86rem;
    font-weight: 700;
    color: var(--global-theme-color);
    margin: 0 0 0.25rem 0;
    line-height: 1.35;
    text-align: center;
  }
  .ylp-modal-org {
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    margin: 0 0 0.2rem 0;
    line-height: 1.4;
    text-align: center;
  }

  /* Modal Social / Contact Row directly below affiliation in Left Column */
  .ylp-modal-socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    flex-wrap: wrap;
    margin-top: 0.65rem;
    padding-top: 0.7rem;
    width: 100%;
    border-top: 1px solid var(--global-divider-color);
  }
  .ylp-modal-socials:empty {
    display: none;
  }
  .ylp-social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.15rem;
    height: 2.15rem;
    border-radius: 9px;
    border: 1px solid var(--global-divider-color);
    background: var(--global-bg-color);
    color: var(--global-text-color) !important;
    font-size: 1.02rem;
    text-decoration: none !important;
    transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
  }
  .ylp-social-icon:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .ylp-social-icon.scholar:hover {
    color: #4285F4 !important;
    border-color: #4285F4;
  }
  .ylp-social-icon.linkedin:hover {
    color: #0A66C2 !important;
    border-color: #0A66C2;
  }
  .ylp-social-icon.orcid:hover {
    color: #A6CE39 !important;
    border-color: #A6CE39;
  }
  .ylp-social-icon.researchgate:hover {
    color: #00CCBB !important;
    border-color: #00CCBB;
  }
  .ylp-social-icon.baidu:hover {
    color: #2932E1 !important;
    border-color: #2932E1;
  }
  .ylp-social-icon.email:hover {
    color: var(--global-theme-color) !important;
    border-color: var(--global-theme-color);
  }

  /* Right Column Section Header & Fully Justified Biography Text */
  .ylp-modal-bio-heading {
    font-size: 1.05rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--global-theme-color);
    margin: 0 0 0.9rem 0;
    padding-bottom: 0.55rem;
    border-bottom: 1px solid var(--global-divider-color);
    text-align: left;
  }
  .ylp-modal-bio {
    text-align: justify;
    text-justify: inter-word;
    font-size: 0.95rem;
    line-height: 1.78;
    color: var(--global-text-color);
    padding: 0;
    margin: 0;
  }
  .ylp-modal-bio p {
    text-align: justify !important;
    text-justify: inter-word;
    color: var(--global-text-color);
    margin: 0 0 1rem 0;
  }
  .ylp-modal-bio p:last-child {
    margin-bottom: 0;
  }

  /* Responsive Fallback for Mobile Screens (< 768px) */
  @media (max-width: 767.98px) {
    .ylp-modal-dialog {
      padding: 1.75rem 1.25rem 1.5rem;
      max-height: 90vh;
    }
    .ylp-modal-grid {
      flex-direction: column;
    }
    .ylp-modal-col-left,
    .ylp-modal-col-right {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0 0.35rem;
    }
    .ylp-modal-col-divider {
      flex: 0 0 auto;
      max-width: 100%;
      width: 100%;
      padding: 1.15rem 0;
    }
    .ylp-modal-divider-line {
      width: 100%;
      height: 1.5px;
      min-height: 1.5px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--global-divider-color) 15%,
        var(--global-theme-color) 50%,
        var(--global-divider-color) 85%,
        transparent 100%
      );
    }
    .ylp-modal-avatar-wrap {
      max-width: 150px;
    }
    .ylp-modal-bio {
      font-size: 0.92rem;
    }
  }
</style>

<div class="ylp-people-wrapper" markdown="0">

  <!-- =====================================================================
       CATEGORY 1: PRINCIPAL INVESTIGATOR
       ===================================================================== -->
  <section class="ylp-category-section" aria-labelledby="cat-pi">
    <div class="ylp-category-header">
      <span class="ylp-category-kicker">Laboratory Leadership</span>
      <h2 class="ylp-category-title" id="cat-pi">Principal Investigator</h2>
    </div>

    <div class="ylp-pi-grid">
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Prof. Lim Yoon Pin"
        data-member-id="member-lim"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Prof. Lim Yoon Pin" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Prof. Lim Yoon Pin</h3>
        <p class="ylp-card-role">Principal Investigator</p>
        <p class="ylp-card-org">Health Science Center, Ningbo University</p>

        <template id="member-lim">
          <div class="ylp-tpl-data"
               data-name="Prof. Lim Yoon Pin"
               data-role="Principal Investigator"
               data-org="Health Science Center, Ningbo University"
               data-img="{{ '/assets/img/prof_pic.jpg' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon scholar" href="https://scholar.google.com/citations?user=-csRnRQAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon linkedin" href="https://www.linkedin.com/in/yoon-pin-lim-b6457417/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon baidu" href="https://baike.baidu.com/item/%E6%9E%97%E5%85%81%E6%96%8C/64129235" target="_blank" rel="noopener noreferrer" title="Baidu Baike (百度百科)" aria-label="Baidu Baike">
                <i class="fa-solid fa-paw" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon email" href="#" data-email-u="bGlteW9vbnBpbg==" data-email-d="bmJ1LmVkdS5jbg==" title="Email Prof. Lim" aria-label="Email Prof. Lim" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Prof. Lim Yoon Pin</strong> is a Singapore borned, internationally recognized expert in oncology with over 20 years of experience in molecular, translational, and clinical cancer research at the Health Science Center, Ningbo University. He was accorded the <strong>Yangtze River Scholar</strong> title, the highest academic honor awarded by China's Ministry of Education. His work focuses on <strong>phosphoproteomics</strong>, the <strong>WBP2 oncogene</strong>, and <strong>precision cancer diagnostics</strong>.</p>
              <p>Previously, Prof. Lim served as Director &amp; PI of the Molecular &amp; Translational Cancer Research Centre in Ningbo and for 16 years on the faculty at the National University of Singapore (NUS), where he also directed the Mass Spectrometry Facility, after completing postdoctoral fellowships at the <strong>Dana-Farber Cancer Institute, Harvard Medical School</strong> and the <strong>National Cancer Centre Singapore</strong>. He has secured <strong>&gt;$8 Million USD</strong> as PI and <strong>&gt;$22 Million USD</strong> as Co-I, holds <strong>&gt;10 international patents</strong> (with 4 patented technologies out-licensed), mentored <strong>&gt;100 researchers</strong>, and authored <strong>~70 peer-reviewed papers</strong> in top-tier journals including <em>EMBO Journal</em>, <em>Journal of Clinical Investigation</em>, <em>Cancer Research</em>, <em>Clinical Cancer Research</em>, <em>ACS Nano</em>, and <em>Oncogene</em>.</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

  <hr class="ylp-category-divider" aria-hidden="true">

  <!-- =====================================================================
       CATEGORY 2: POSTDOCTORAL RESEARCHERS
       ===================================================================== -->
  <section class="ylp-category-section" aria-labelledby="cat-postdocs">
    <div class="ylp-category-header">
      <span class="ylp-category-kicker">Research Fellows</span>
      <h2 class="ylp-category-title" id="cat-postdocs">Postdoctoral Researchers</h2>
    </div>

    <div class="ylp-team-grid">
      <!-- 1. Dr. Amir Sabbaghian -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Amir Sabbaghian"
        data-member-id="member-amir"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Amir.jpg?v=20261102' | relative_url }}" alt="Dr. Amir Sabbaghian" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Amir Sabbaghian</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-amir">
          <div class="ylp-tpl-data"
               data-name="Dr. Amir Sabbaghian"
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Amir.jpg?v=20261102' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon scholar" href="https://scholar.google.com/citations?user=kxTGKY4AAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon linkedin" href="https://www.linkedin.com/in/amir-sabbaghian-ph-d-959178159/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon orcid" href="https://orcid.org/0000-0003-0141-3547" target="_blank" rel="noopener noreferrer" title="ORCID" aria-label="ORCID">
                <i class="fa-brands fa-orcid" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon researchgate" href="https://www.researchgate.net/profile/Amir-Sabbaghian" target="_blank" rel="noopener noreferrer" title="ResearchGate" aria-label="ResearchGate">
                <i class="ai ai-researchgate" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon email" href="#" data-email-u="c2FiYmFnaGlhbg==" data-email-d="bmJ1LmVkdS5jb20=" title="Email Dr. Amir Sabbaghian" aria-label="Email Dr. Amir Sabbaghian" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Amir Sabbaghian</strong> is a Postdoctoral Researcher at Ningbo University with a PhD in Molecular Medicine and previous postdoctoral research experience at Zhejiang University. His work focuses on translational cancer research.</p>

<p>His current research primarily focuses on breast cancer biomarker discovery and tumor immune response. He was the first to report the association of WFIKKN2 with cancer, and his ongoing research aims to characterize its potential tumor-promoting functions and establish its clinical utility. In parallel, he investigates the role of WBP2 in regulating tumor cell responses to immune signaling, with particular emphasis on its potential contribution to tumor immune evasion. To date, Dr. Sabbaghian has filed a patent application in China and authored nine peer-reviewed scientific publications in internationally recognized journals, including Biomarker Research, Cells, and International Journal of Cancer.</p>

            </div>
          </div>
        </template>
      </div>

      <!-- 2. Dr. Tianyu Ma -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Tianyu Ma"
        data-member-id="member-tianyu"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Tianyu.jpg' | relative_url }}" alt="Dr. Tianyu Ma" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Tianyu Ma</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-tianyu">
          <div class="ylp-tpl-data"
               data-name="Dr. Tianyu Ma"
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Tianyu.jpg' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon email" href="#" data-email-u="bndvcmwkamFzb24=" data-email-d="MTYzLmNvbQ==" title="Email Dr. Tianyu Ma" aria-label="Email Dr. Tianyu Ma" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Tianyu Ma</strong> is a Postdoctoral Researcher specializing in Epigenetics and Cancer Development, holding a Ph.D. from Peking Union Medical College. His research focuses on the molecular mechanisms driving tumor development, with a specific emphasis on epigenetic regulators, chromatin modifier complexes (such as CRL4B), and their role in breast tumorigenesis and environmental health.</p>
              <p>Dr. Ma's scholarly contributions include high-impact peer-reviewed publications in journals such as <em>Cell Death &amp; Differentiation</em>, <em>Advanced Science</em>, and <em>Frontiers of Medicine</em>. In addition to his research achievements, he was recognized with the National Voluntary Blood Donation Contribution Award (Bronze Award, 2020–2021) and consecutive Peking Union Medical College Academic Scholarships.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 3. Dr. Muhammad Wajeeh Us Sima -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Muhammad Wajeeh Us Sima"
        data-member-id="member-wajeeh"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/wajeeh.jpg?v=20261102b' | relative_url }}" alt="Dr. Muhammad Wajeeh Us Sima" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Muhammad Wajeeh Us Sima</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-wajeeh">
          <div class="ylp-tpl-data"
               data-name="Dr. Muhammad Wajeeh Us Sima"
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/wajeeh.jpg?v=20261102b' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon scholar" href="https://scholar.google.com/citations?user=K1_iHZkAAAAJ" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon linkedin" href="https://www.linkedin.com/in/wajeeh-rathore/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon orcid" href="https://orcid.org/0000-0002-0100-2900" target="_blank" rel="noopener noreferrer" title="ORCID" aria-label="ORCID">
                <i class="fa-brands fa-orcid" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon researchgate" href="https://www.researchgate.net/profile/Muhammad-Wajeeh-Us-Sima" target="_blank" rel="noopener noreferrer" title="ResearchGate" aria-label="ResearchGate">
                <i class="ai ai-researchgate" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon email" href="#" data-email-u="c2ltYQ==" data-email-d="bmJ1LmVkdS5jbg==" title="Email Dr. Wajeeh" aria-label="Email Dr. Wajeeh" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Muhammad Wajeeh Us Sima</strong> is a Computer Science Scholar and AI Researcher specializing in Deep Learning and Medical Image Analysis. He holds a Ph.D. in Computer Science and Technology from Chongqing University and is currently a Postdoctoral Researcher at Ningbo University, where his research focuses on the <strong>Spatial Mapping of the Tumor Microenvironment</strong> in breast cancer.</p>
              <p>With over 5 years of research experience, Dr. Wajeeh advances AI for complex medical applications, including computational histopathology, stain generalization, and multimodal imaging (MRI, X-ray, and HIP-CT). His interdisciplinary work also encompasses privacy-preserving healthcare AI and intelligent security for Medical IoT (IoMT) systems. Dr. Wajeeh has authored 11+ peer-reviewed journal papers in high-impact venues (<em>Journal of Big Data</em>, <em>IEEE Transactions on Consumer Electronics</em>, <em>BioData Mining</em>, <em>Image and Vision Computing</em>, <em>Internet of Things</em>, <em>Frontiers in Medicine</em>), alongside conference papers and a book chapter on retinal microvascular analysis for diabetic retinopathy. A former University Lecturer and an active reviewer for prestigious international journals, he was honored with the Chongqing University Academic Research Innovation Award (2025).</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 4. Dr. Muhammad Waqas Nasir -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Muhammad Waqas Nasir"
        data-member-id="member-waqas"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Waqas.jpg?v=20261102' | relative_url }}" alt="Dr. Muhammad Waqas Nasir" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Muhammad Waqas Nasir</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-waqas">
          <div class="ylp-tpl-data"
               data-name="Dr. Muhammad Waqas Nasir"
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Waqas.jpg?v=20261102' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon scholar" href="https://scholar.google.com/citations?user=MqFExWMAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon email" href="#" data-email-u="d2FxYXNuYXNpcg==" data-email-d="bWFpbC51c3RjLmVkdS5jbg==" title="Email Dr. Waqas" aria-label="Email Dr. Waqas" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Muhammad Waqas Nasir</strong> is a Postdoctoral Researcher specializing in biochemistry, molecular biology, structural biology, and antibody engineering. He earned his Ph.D. in Biochemistry and Molecular Biology from the University of Science and Technology of China (USTC). Dr. Nasir's research centers on structure-guided antibody engineering, viral immunology, and structure-based therapeutic development, with a focus on SARS-CoV-2 neutralizing antibodies and mechanisms of viral immune escape.</p>
              <p>He combines experimental techniques—including X-ray crystallography, protein engineering, and molecular biology—with computational modeling to examine antibody recognition and engineer potent therapeutics. His structural contributions include the crystal structure of the SARS-CoV-2 receptor-binding domain in complex with the XG83 Fab (PDB ID: 9UTF). Dr. Nasir has published key research articles in top journals such as the <em>European Journal of Medicinal Chemistry</em>, <em>Microbiology Spectrum</em>, <em>Journal of Structural Biology: X</em>, and <em>Journal of Medical Virology</em>. His academic achievements have been recognized with the prestigious CAS-ANSO Scholarship for Young Talents and participation in international AEARU Global Learning Initiatives.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 5. Dr. Unnikrishnan P. S. -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Unnikrishnan P. S."
        data-member-id="member-unni"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Unikrishnan.jpg' | relative_url }}" alt="Dr. Unnikrishnan P. S." loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Unnikrishnan P. S.</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-unni">
          <div class="ylp-tpl-data"
               data-name="Dr. Unnikrishnan P. S."
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Unikrishnan.jpg' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon scholar" href="https://scholar.google.com/citations?user=8lfNs2EAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i>
              </a>
              <a class="ylp-social-icon email" href="#" data-email-u="cHN1bm5pa3Jpc2huYW4uaWl0aA==" data-email-d="Z21haWwuY29t" title="Email Dr. Unnikrishnan" aria-label="Email Dr. Unnikrishnan" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Unnikrishnan P. S.</strong> is a Postdoctoral Researcher at Ningbo University specializing in biotechnology, protein biochemistry, molecular biology, and DNA repair mechanisms. He earned his Ph.D. in Biotechnology from the Indian Institute of Technology Hyderabad (IITH), where his doctoral research investigated the selective inhibition of the human DNA repair enzyme ALKBH2, protein-ligand dynamics, and the development of cell-permeable fluorescent probes for live-cell imaging to overcome chemoresistance in cancer cells.</p>
              <p>In his current research at Ningbo University, Dr. Unnikrishnan focuses on elucidating the role of WBP2 in the DNA damage response and repair, exploring its involvement in cellular metabolism, and advancing targeted cancer therapeutics. Dr. Unnikrishnan has authored 10 peer-reviewed publications across leading journals including <em>Talanta</em>, <em>Journal of Biological Chemistry</em>, <em>DNA Repair</em>, <em>Biochemical Journal</em>, and <em>Dalton Transactions</em>, along with a book publication. His academic distinctions include qualifying prestigious national competitive examinations such as the CSIR-UGC NET JRF, GATE, and TIFR-JGEEBILS.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 6. Dr. Baitul Islam -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Dr. Baitul Islam"
        data-member-id="member-baitul"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/baitul.jpg' | relative_url }}" alt="Dr. Baitul Islam" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Dr. Baitul Islam</h3>
        <p class="ylp-card-role">Postdoctoral Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-baitul">
          <div class="ylp-tpl-data"
               data-name="Dr. Baitul Islam"
               data-role="Postdoctoral Researcher"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/baitul.jpg' | relative_url }}">
            <div class="ylp-tpl-socials"></div>
            <div class="ylp-tpl-bio">
              <p><strong>Dr. Baitul Islam</strong> is a Postdoctoral Researcher at the School of Basic Medical Sciences, Ningbo University. He earned his Ph.D. in Microbiology from the Xiangya School of Basic Medical Sciences at Central South University, where his doctoral research focused on elucidating the molecular mechanisms of tumorigenesis and identifying potential therapeutic targets for hepatocellular carcinoma (HCC).</p>
              <p>Integrating molecular biology, cancer genetics, and bioinformatics, Dr. Islam's current postdoctoral research focuses on protein trafficking in cancer and drug discovery for breast cancer. Dr. Islam has authored research articles in peer-reviewed international journals including <em>Phytomedicine</em>, <em>Epigenetics</em>, and the <em>Journal of Biomolecular Structure &amp; Dynamics</em>, with recent contributions in drug discovery and prognostic biomarkers for HBV-related HCC. His scholarly work was recognized with the Third Prize for Outstanding Oral Presentation at the International Symposium on Cryobiology and Living Biobanking (CBLB).</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

  <hr class="ylp-category-divider" aria-hidden="true">

  <!-- =====================================================================
       CATEGORY 3: ASSISTANT RESEARCHER & MASTER STUDENTS
       ===================================================================== -->
  <section class="ylp-category-section" aria-labelledby="cat-staff-students">
    <div class="ylp-category-header">
      <span class="ylp-category-kicker">Research Staff &amp; Graduate Scholars</span>
      <h2 class="ylp-category-title" id="cat-staff-students">Assistant Researcher &amp; Master Students</h2>
    </div>

    <div class="ylp-team-grid">
      <!-- 1. Wang Xiaofang -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Wang Xiaofang"
        data-member-id="member-xiaofang"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/xiaofang.jpg?v=20261102' | relative_url }}" alt="Wang Xiaofang" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Wang Xiaofang</h3>
        <p class="ylp-card-role">Assistant Researcher</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-xiaofang">
          <div class="ylp-tpl-data"
               data-name="Wang Xiaofang"
               data-role="Assistant Researcher"
               data-org="Health Science Center, Ningbo University"
               data-img="{{ '/assets/img/xiaofang.jpg?v=20261102' | relative_url }}">
            <div class="ylp-tpl-socials">
              <a class="ylp-social-icon email" href="#" data-email-u="d2FuZ3hpYW9mYW5nMg==" data-email-d="bmJ1LmVkdS5jbg==" title="Email Wang Xiaofang" aria-label="Email Wang Xiaofang" role="button">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
            <div class="ylp-tpl-bio">
              <p><strong>Wang Xiaofang</strong>, graduated from Liaoning University of Traditional Chinese Medicine, currently works at the Health Science Center / School of Medicine of Ningbo University as an Assistant Researcher. Her research focuses on the mechanisms of small-molecule drugs in anti-tumor effects. She has led one project under the Natural Science Foundation of Ningbo City and one project under the Science and Technology Medicine Project of Ningbo City, and participated in one project under the Natural Science Foundation of Zhejiang Province.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 2. Zhao Yi (Ella) -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Zhao Yi (Ella)"
        data-member-id="member-ella"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Ella.jpg' | relative_url }}" alt="Zhao Yi (Ella)" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Zhao Yi (Ella)</h3>
        <p class="ylp-card-role">Master's Student</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-ella">
          <div class="ylp-tpl-data"
               data-name="Zhao Yi (Ella)"
               data-role="Master's Student"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Ella.jpg' | relative_url }}">
            <div class="ylp-tpl-socials"></div>
            <div class="ylp-tpl-bio">
              <p><strong>Zhao Yi (Ella)</strong> is a Master's student in cancer biology and biomedical research at Ningbo University. She earned her B.Sc. at Zhejiang Chinese Medical University. Her research aims to study the molecular mechanisms of tumor metabolism to help advance the discovery of novel cancer treatments. She enjoys practicing scientific and cross-cultural communication and has participated in a number of English and intercultural communication contests at home and abroad.</p>
            </div>
          </div>
        </template>
      </div>

      <!-- 3. Li Jiaying -->
      <div
        class="ylp-person-card"
        tabindex="0"
        role="button"
        aria-haspopup="dialog"
        aria-label="View biography and details for Li Jiaying"
        data-member-id="member-jiaying"
      >
        <div class="ylp-card-photo-wrap">
          <img class="ylp-card-photo" src="{{ '/assets/img/Jiaying.jpg?v=20261102' | relative_url }}" alt="Li Jiaying" loading="lazy">
        </div>
        <h3 class="ylp-card-name">Li Jiaying</h3>
        <p class="ylp-card-role">Master's Student</p>
        <p class="ylp-card-org">Ningbo University</p>

        <template id="member-jiaying">
          <div class="ylp-tpl-data"
               data-name="Li Jiaying"
               data-role="Master's Student"
               data-org="Ningbo University"
               data-img="{{ '/assets/img/Jiaying.jpg?v=20261102' | relative_url }}">
            <div class="ylp-tpl-socials"></div>
            <div class="ylp-tpl-bio">
              <p><strong>Li Jiaying</strong> is a Master's student in Basic Medical Sciences at Ningbo University. Her research focuses on advancing fundamental biomedical sciences and exploring key cellular and molecular mechanisms in cancer progression and precision therapeutics.</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

</div>

<!-- =======================================================================
     CENTERED MODAL POPUP OVERLAY (24% Left | 5% Divider | 71% Right)
     ======================================================================= -->
<div class="ylp-modal-backdrop" id="ylp-person-modal" role="dialog" aria-modal="true" aria-labelledby="ylp-modal-name" aria-hidden="true">
  <div class="ylp-modal-dialog" role="document">
    <button type="button" class="ylp-modal-close" id="ylp-modal-close-btn" aria-label="Close member profile modal" title="Close (Esc)">
      &#10005;
    </button>

    <div class="ylp-modal-grid">
      <!-- Left Column (24% / col-span-3): Profile Picture, Name, Title, Affiliation, Social Icons -->
      <div class="ylp-modal-col-left">
        <div class="ylp-modal-avatar-wrap">
          <img class="ylp-modal-avatar" id="ylp-modal-img" src="" alt="">
        </div>
        <h3 class="ylp-modal-name" id="ylp-modal-name"></h3>
        <p class="ylp-modal-role" id="ylp-modal-role"></p>
        <p class="ylp-modal-org" id="ylp-modal-org"></p>
        <div class="ylp-modal-socials" id="ylp-modal-socials"></div>
      </div>

      <!-- Center Column (5% / col-span-1): Vertical Gradient Divider Line -->
      <div class="ylp-modal-col-divider" aria-hidden="true">
        <div class="ylp-modal-divider-line"></div>
      </div>

      <!-- Right Column (71% / col-span-8): Section Header & Justified Biography Text -->
      <div class="ylp-modal-col-right">
        <h4 class="ylp-modal-bio-heading">Biography &amp; Research Focus</h4>
        <div class="ylp-modal-bio" id="ylp-modal-bio"></div>
      </div>
    </div>
  </div>
</div>

<script>
  (function () {
    var modalBackdrop = document.getElementById("ylp-person-modal");
    var closeBtn = document.getElementById("ylp-modal-close-btn");
    var modalImg = document.getElementById("ylp-modal-img");
    var modalName = document.getElementById("ylp-modal-name");
    var modalRole = document.getElementById("ylp-modal-role");
    var modalOrg = document.getElementById("ylp-modal-org");
    var modalSocials = document.getElementById("ylp-modal-socials");
    var modalBio = document.getElementById("ylp-modal-bio");
    var lastFocusedCard = null;

    if (!modalBackdrop) return;

    function openMemberModal(card) {
      var templateId = card.getAttribute("data-member-id");
      var tpl = document.getElementById(templateId);
      if (!tpl) return;

      var contentRoot = tpl.content.querySelector(".ylp-tpl-data");
      if (!contentRoot) return;

      lastFocusedCard = card;

      var name = contentRoot.getAttribute("data-name") || "";
      var role = contentRoot.getAttribute("data-role") || "";
      var org = contentRoot.getAttribute("data-org") || "";
      var img = contentRoot.getAttribute("data-img") || "";

      modalImg.src = img;
      modalImg.alt = name;
      modalName.textContent = name;
      modalRole.textContent = role;
      modalOrg.textContent = org;

      var socialsNode = contentRoot.querySelector(".ylp-tpl-socials");
      modalSocials.innerHTML = socialsNode ? socialsNode.innerHTML.trim() : "";

      var bioNode = contentRoot.querySelector(".ylp-tpl-bio");
      modalBio.innerHTML = bioNode ? bioNode.innerHTML : "";

      modalBackdrop.classList.add("is-open");
      modalBackdrop.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function closeMemberModal() {
      if (!modalBackdrop.classList.contains("is-open")) return;
      modalBackdrop.classList.remove("is-open");
      modalBackdrop.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocusedCard) {
        lastFocusedCard.focus();
        lastFocusedCard = null;
      }
    }

    // Bind click and keyboard (Enter / Space) events to all member cards
    var cards = document.querySelectorAll(".ylp-person-card[data-member-id]");
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        openMemberModal(card);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openMemberModal(card);
        }
      });
    });

    // Explicit Close Button ('X')
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        closeMemberModal();
      });
    }

    // Click Outside (on backdrop overlay) to Dismiss Modal
    modalBackdrop.addEventListener("click", function (e) {
      if (e.target === modalBackdrop) {
        closeMemberModal();
      }
    });

    // Escape Key to Dismiss Modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) {
        closeMemberModal();
      }
    });
  })();
</script>
