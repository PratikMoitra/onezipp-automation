# Onezipp Projects

This document tracks all Onezipp projects and repositories.

## 1. Onezipp Landing Page (Landing Page Project)

**Status:** ✅ Complete
**Repository:** https://github.com/PratikMoitra/onezipp-landing
**Location:** `/Users/pratik/Documents/onezipp-landing/`

### Overview
A professional, high-converting landing page for Onezipp featuring:
- Light theme design matching onezipp.com branding
- Interactive n8n + Claude central hub with 8 animated orbs
- 12 integrated automation platforms (Gmail, Slack, Notion, HubSpot, Airtable, Google Sheets, Zapier, OpenAI, Make.com, n8n, GoHighLevel, Webhooks)
- Embedded cal.com 45-minute discovery call booking
- Strong "Why Onezipp?" lead magnet section highlighting founder's 15+ years enterprise experience
- "Let's Talk" CTA buttons replacing generic quote requests

### Key Features
- **Framework:** Vanilla HTML/CSS/JavaScript (zero dependencies)
- **File Size:** 56 KB (single file)
- **Lines of Code:** 1,533
- **Branding:** Colors from onezipp.com (#D83030, #032E42, #FFFFFF)
- **Responsive:** Mobile, tablet, desktop optimized
- **Animation:** CSS offset-path orb flows, pulsing glow effects
- **Booking:** Cal.com calendar embed (no branding visible)

### Contact Details Used
- Email: support@onezipp.com
- Phone: +1 (910) 994-0870
- LinkedIn: linkedin.com/company/onezipp-norge-as/

### Founder Background Highlighted
- 15+ years enterprise IT experience
- Certifications: CCSP, GCSA, Enterprise Design Thinking, AWS Architect, Cisco CCIE, Cisco CCNP
- Expertise: Cloud architecture, network security, system integration, digital transformation

### Deployment Options
- Vercel: `vercel deploy /Users/pratik/Documents/onezipp-landing/`
- Netlify: Connect GitHub repo for auto-deploy
- Static hosting: Upload index.html to any web server
- No build step required

### Clone the Project
```bash
git clone https://github.com/PratikMoitra/onezipp-landing.git
```

---

## 2. N8N Workflows Project (This Repository)

**Status:** 🔄 Active Development
**Repository:** https://github.com/PratikMoitra/onezipp-automation
**Location:** `/Users/pratik/Documents/n8n-flows/`

### Overview
Google Apps Script dashboard and n8n workflow automation system for Onezipp:
- Upwork email classifier using OpenAI
- Industry analysis dashboard in Google Sheets
- Automation workflow for email processing
- 10 industry-specific analysis pages

### Key Components
- **Google Apps Script** — `onezipp/` folder with dashboard creation
- **N8N Workflow** — `upwork-email-classifier.json`
- **Vercel Deployment** — Static playbook hosting
- **Industry Pages** — 10 separate HTML pages with analysis data

### Contact Details
- Onezipp branding aligned with main website
- Professional dashboard layout
- Email-based workflow triggers

---

## Project Organization

```
User Directory
├── /onezipp-landing/                    # LANDING PAGE PROJECT (separate repo)
│   ├── index.html                       # Single-file landing page
│   ├── README.md                        # Landing page documentation
│   ├── .gitignore
│   └── .git/
│       └── remote: github.com/PratikMoitra/onezipp-landing
│
└── /n8n-flows/                          # N8N WORKFLOWS PROJECT (this repo)
    ├── CLAUDE.md                        # Project instructions
    ├── PROJECTS.md                      # This file
    ├── upwork-email-classifier.json     # N8N workflow
    ├── vercel.json                      # Vercel config
    ├── onezipp/                         # Google Apps Script
    │   ├── create_dashboard.gs
    │   ├── create_upwork_analysis_sheet.gs
    │   ├── onezipp-landing.html         # OLD (now in separate repo)
    │   └── industries/                  # 10 industry pages
    └── .git/
        └── remote: github.com/PratikMoitra/onezipp-automation
```

---

## Important Notes

### Separation of Concerns
- **Landing Page** (`onezipp-landing` repo) — Marketing landing page only
- **N8N Workflows** (`onezipp-automation` repo) — Automation, workflows, dashboards

These are intentionally kept as **separate projects** for:
1. **Clarity** — Landing page is pure marketing content
2. **Deployment** — Different deployment strategies
3. **Maintenance** — Independent version control
4. **Focus** — Each repo serves a single purpose

### Founder Background Handling
The landing page carefully positions the founder's background:
- ✅ Highlights 15+ years enterprise expertise
- ✅ Mentions security, cloud, integration skills
- ✅ Emphasizes Fortune 500 experience
- ⚠️ **Explicitly avoids** offering security automation services (conflict of interest)
- ✅ Notes that security expertise benefits architecture quality

### Contact Information Sources
All contact details pulled from official Onezipp sources:
- **Email:** support@onezipp.com (from onezipp.com contact page)
- **Phone:** +1 (910) 994-0870 (from onezipp.com)
- **LinkedIn:** linkedin.com/company/onezipp-norge-as/ (verified from LinkedIn)

---

## Next Steps (Optional)

### Landing Page
1. Deploy to production domain
2. Add Google Analytics tracking
3. Test booking flow across devices
4. Monitor conversion rates

### N8N Workflows
1. Continue industry analysis data updates
2. Integrate with live Upwork API
3. Auto-publish insights to dashboard
4. Monitor automation health

---

**Last Updated:** February 26, 2026
**Maintained By:** Pratik Moitra
**For:** Onezipp — Custom Workflow Automation Agency
