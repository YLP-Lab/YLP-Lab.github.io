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

  doc.output = output
end
