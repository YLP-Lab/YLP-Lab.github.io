# frozen_string_literal: true

require "base64"

# 1. Injects security headers (<meta> tags for Content-Security-Policy,
#    Referrer-Policy, and X-Content-Type-Options) into rendered HTML pages.
# 2. Makes Google Fonts stylesheet non-render-blocking so slow/blocked CDN
#    connections never stall page loading.
# 3. Converts any remaining `mailto:` links emitted by gem includes into
#    Base64-obfuscated `data-email-u` / `data-email-d` attributes so zero
#    plain-text email addresses appear in rendered HTML.
Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output_ext == ".html" && doc.output.include?("<head>")

  security_meta = <<~HTML.chomp
    <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; font-src 'self' data: https://cdn.jsdelivr.net https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' mailto:; object-src 'none'; upgrade-insecure-requests;">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
  HTML

  output = doc.output.sub("<head>", security_meta)

  # Make Google Fonts async / non-blocking to prevent network timeouts from slowing down page load
  output = output.gsub(
    /<link\s+defer\s+rel="stylesheet"\s+type="text\/css"\s+href="(https:\/\/fonts\.googleapis\.com\/[^"]+)"\s*>/i,
    '<link rel="stylesheet" type="text/css" href="\1" media="print" onload="this.media=\'all\'">'
  )

  # Obfuscate any remaining href="mailto:user@domain" emitted by gem includes
  output = output.gsub(/href=(["'])mailto:([^"'?]+)([^"']*)\1/i) do
    quote = Regexp.last_match(1)
    addr = Regexp.last_match(2)
    parts = addr.split("@", 2)
    if parts.length == 2
      u64 = Base64.strict_encode64(parts[0])
      d64 = Base64.strict_encode64(parts[1])
      "href=#{quote}##{quote} data-email-u=#{quote}#{u64}#{quote} data-email-d=#{quote}#{d64}#{quote}"
    else
      Regexp.last_match(0)
    end
  end

  # 4. Inject Logo into Navbar brand on all pages (left side of header)
  if output.include?('id="navbar"')
    base = doc.site.config["baseurl"].to_s.chomp("/")
    logo_src = "#{base}/assets/img/Logo.png"
    logo_img = %Q{<img src="#{logo_src}" alt="YPLab Logo" class="ylp-navbar-logo">}

    if output.include?('class="navbar-brand')
      output = output.sub(/(<a\s+class="navbar-brand[^>]*>)(?!\s*<img[^>]*class="ylp-navbar-logo)/, "\\1#{logo_img}")
    else
      home_url = base.empty? ? "/" : "#{base}/"
      brand_html = %Q{<a class="navbar-brand title font-weight-lighter" href="#{home_url}">#{logo_img}<span class="font-weight-bold">Prof. Lim Yoon Pin</span></a>}
      output = output.sub(/(<nav[^>]*id="navbar"[^>]*>\s*<div class="container">\s*)(<!-- Navbar Toggle -->|<button)/m, "\\1#{brand_html}\n      \\2")
    end
  end

  # 5. Force fresh favicon links on all pages to immediately bust browser tab caches
  fav_url = "#{doc.site.config["baseurl"].to_s.chomp("/")}/assets/img/Logo.png?v=20261103_2"
  fav_tags = %Q{<link rel="shortcut icon" href="#{fav_url}">\n  <link rel="icon" type="image/png" sizes="32x32" href="#{fav_url}">\n  <link rel="icon" type="image/png" sizes="16x16" href="#{fav_url}">\n  <link rel="apple-touch-icon" href="#{fav_url}">}
  output = output.gsub(/<link\s+rel="shortcut icon"[^>]*>/i, "")
  output = output.gsub(/<link\s+rel="icon"[^>]*>/i, "")
  output = output.gsub(/<link\s+rel="apple-touch-icon"[^>]*>/i, "")
  output = output.sub("<head>", "<head>\n  #{fav_tags}")

  doc.output = output
end
