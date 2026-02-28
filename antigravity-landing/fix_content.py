import codecs
import re

with codecs.open('industries/finance-accounting.html', 'r', 'utf-8') as f:
    template = f.read()

# Make the template generic
template = template.replace('../onezipp-landing.html', '../index.html')

template = re.sub(r'<a href="tel:\+1234567890" class="toolbar-phone">.*?</a>', 
    r'<a href="tel:+19109940870" class="toolbar-phone"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+1 (910) 994-0870</a> <a href="tel:+447447193940" class="toolbar-phone" style="margin-left:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+44 74 4719 3940</a>', template)

template = template.replace(">hello@onezipp.com<", ">Connect@onezipp.com<")
template = template.replace('mailto:hello@onezipp.com', 'mailto:Connect@onezipp.com')

cal_embed_section = """<section class="cta-section section-padding" id="contact"><div class="container">
    <div class="section-header fade-in"><h2>Ready to scale your workflows?</h2><p>Book a free 45-minute discovery call below. We'll map your processes and show you exactly what we'd build.</p></div>
    <!-- Cal inline embed code begins -->
    <div style="width:100%;height:600px;overflow:scroll;background:#fff;border-radius:12px;" id="my-cal-inline"></div>
    <script type="text/javascript">
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar) }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true } if (ar[0] === L) { const api = function () { p(api, arguments) }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]) } else p(cal, ar); return } p(cal, ar) } })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "45min", {origin:"https://cal.com"});
      Cal.ns["45min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        calLink: "onezipp/45min",
        layout: "month_view"
      });
      Cal.ns["45min"]("ui", {"styles":{"branding":{"brandColor":"#D83030"}},"hideEventTypeDetails":false,"layout":"month_view"});
    </script>
    <!-- Cal inline embed code ends -->
</div></section>"""

template_with_embed = re.sub(r'<section class="cta-section.*?</section>', cal_embed_section, template, flags=re.DOTALL)

# Create Custom Web App
cwa = template_with_embed
cwa = cwa.replace('<title>Finance & Accounting Automation — oneZipp</title>', '<title>Custom Web & App Development — oneZipp</title>')
cwa = cwa.replace('content="oneZipp builds custom Finance & Accounting automation workflows: invoice processing, bank reconciliation, AR follow-up. Live in 2 weeks."', 'content="oneZipp builds and develops custom apps and websites from the ground up, tailored specifically to your business operations."')
cwa = cwa.replace('<span class="current">Finance & Accounting</span>', '<span class="current">Custom Web & App Development</span>')
cwa = cwa.replace('<span class="hero-badge" style="background:rgba(217,119,6,0.1);color:#D97706;">MEDIUM PRIORITY</span>', '<span class="hero-badge" style="background:rgba(139,92,246,0.1);color:#8B5CF6;">HIGH IMPACT</span>')
cwa = cwa.replace('<h1>Finance & Accounting Automation</h1>', '<h1>Custom Web & App Development</h1>')
cwa = cwa.replace('<p class="lead">Reduce manual data entry and close your books faster with automated invoicing, reconciliation, and reporting. Our workflows connect your financial tools into a seamless pipeline.</p>', '<p class="lead">Need to start from scratch or refresh an existing site? We build and develop custom apps and websites from the ground up, tailored specifically to your business operations and automating your digital front door.</p>')

niche_start = cwa.find('<div class="section-header fade-in"><h2>Top 3 Automation Niches</h2>')
niche_end = cwa.find('</section>', niche_start)
niche_new = """<div class="section-header fade-in"><h2>Our Development Offerings</h2><p>Specialized solutions we build to power and automate your business operations.</p></div>
    <div class="niche-grid">
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#8B5CF6;">Custom Web Applications</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Build robust, high-performance web apps tailored to your unique workflows.</p></div>
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#8B5CF6;">Website Refresh</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Modernize and revitalize your existing site with cutting-edge UI/UX and seamless responsive layouts.</p></div>
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#8B5CF6;">API & Integration Hubs</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Develop custom middleware and portals to bridge the gap between all your essential business tools.</p></div>
    </div>
</div>"""
cwa = cwa[:niche_start] + niche_new + cwa[niche_end:]

ben_start = cwa.find('<div class="section-header fade-in"><h2>Why Automate Finance & Accounting</h2></div>')
ben_end = cwa.find('</section>', ben_start)
ben_new = """<div class="section-header fade-in"><h2>Why Choose Custom Development</h2></div>
    <div class="benefits-grid">
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(139,92,246,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><h3>Built for Your Logic</h3><p>Off-the-shelf software dictates how you work. Custom development adapts specifically to your existing operational logic.</p></div>
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(139,92,246,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg></div><h3>Seamless Interfaces</h3><p>Provide a premium, polished digital front door for your clients that natively hooks into your automated backend.</p></div>
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(139,92,246,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h3>Absolute Ownership</h3><p>You own the code and the infrastructure. No escalating Saas pricing tiers, zero limits on scalabilty, and absolute security.</p></div>
    </div>
</div>"""
cwa = cwa[:ben_start] + ben_new + cwa[ben_end:]

# Create Other Industries
oi = template_with_embed
oi = oi.replace('<title>Finance & Accounting Automation — oneZipp</title>', '<title>Other Industries & Tasks — oneZipp</title>')
oi = oi.replace('content="oneZipp builds custom Finance & Accounting automation workflows: invoice processing, bank reconciliation, AR follow-up. Live in 2 weeks."', 'content="oneZipp builds comprehensive automated workflows for varying industries: specialized lead scraping, comprehensive Twilio outreach routing, and custom CRM API hookups."')
oi = oi.replace('<span class="current">Finance & Accounting</span>', '<span class="current">Other Industries & Tasks</span>')
oi = oi.replace('<span class="hero-badge" style="background:rgba(217,119,6,0.1);color:#D97706;">MEDIUM PRIORITY</span>', '<span class="hero-badge" style="background:rgba(107,114,128,0.1);color:#6B7280;">CROSS-INDUSTRY</span>')
oi = oi.replace('<h1>Finance & Accounting Automation</h1>', '<h1>Other Industries & Common Tasks</h1>')
oi = oi.replace('<p class="lead">Reduce manual data entry and close your books faster with automated invoicing, reconciliation, and reporting. Our workflows connect your financial tools into a seamless pipeline.</p>', '<p class="lead">Specialised lead scraping, orchestrated outbound email and SMS outreach, robust Twilio communications with complex API routing, and scalable automations adapted for any business niche.</p>')

niche_start = oi.find('<div class="section-header fade-in"><h2>Top 3 Automation Niches</h2>')
niche_end = oi.find('</section>', niche_start)
niche_new = """<div class="section-header fade-in"><h2>Top Universal Automation Tasks</h2><p>Our most commonly requested standalone capabilities deployed across various industries.</p></div>
    <div class="niche-grid">
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#6B7280;">Scale Lead Scraping</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Intelligently scrape search engines, map APIs, and deep directories passing clean data directly to your CRM.</p></div>
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#6B7280;">Outbound Campaigns</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Automate personalized bulk outbound Email & SMS systems configured with high deliverability metrics.</p></div>
        <div class="niche-card fade-in"><h3 style="border-bottom-color:#6B7280;">Twilio / Webhook Systems</h3><p style="color:var(--text-secondary);font-size:15px;line-height:1.6">Program complex routing arrays with active listener webhooks connecting Twilio API instances right into operational sheets.</p></div>
    </div>
</div>"""
oi = oi[:niche_start] + niche_new + oi[niche_end:]

ben_start = oi.find('<div class="section-header fade-in"><h2>Why Automate Finance & Accounting</h2></div>')
ben_end = oi.find('</section>', ben_start)
ben_new = """<div class="section-header fade-in"><h2>Why Automate Core Operations</h2></div>
    <div class="benefits-grid">
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(107,114,128,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Predictable Volume</h3><p>Scale your prospect discovery by deploying 24/7 web scraping sequences filling your pipeline.</p></div>
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(107,114,128,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><h3>Orchestrated Delivery</h3><p>Ensure high deliverability and compliant SMS/Email outreach workflows, taking friction out of marketing sequences.</p></div>
        <div class="benefit-card fade-in"><div class="benefit-icon" style="background:rgba(107,114,128,0.1);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><h3>Measurable ROI</h3><p>Repetitive admin and communications are massive sinkholes. Automating them reduces headcount expenses immediately.</p></div>
    </div>
</div>"""
oi = oi[:ben_start] + ben_new + oi[ben_end:]

with open('industries/custom-web-app.html', 'w', encoding='utf-8') as f:
    f.write(cwa)

with open('industries/other-industries.html', 'w', encoding='utf-8') as f:
    f.write(oi)

