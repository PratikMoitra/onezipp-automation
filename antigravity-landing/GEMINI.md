# OneZipp Landing Page Project (Gemini AI Ruleset)

## Project Overview
This project is the primary landing page website for **OneZipp**, an automation agency focused on providing business workflow automations using platforms like n8n, Zapier, and Make.com. The site emphasizes speed, reliability, and enterprise-grade architecture (backed by 25+ years of experience).

**Tagline:** Scaling Simplicity. Automating Intelligence.
**Live Example/Inspiration Reference:** https://onezipp.vercel.app/
**Primary Staging Environment:** Managed via Coolify (on the `staging` branch).

## Technologies & Stack
- **HTML5:** Semantic architecture.
- **CSS3:** Vanilla CSS, custom properties for theming, fully responsive design without external frameworks (like Tailwind or Bootstrap).
- **JavaScript & Animations:** Scroll-triggered `IntersectionObserver` animations (`.reveal` classes), GSAP (if used for complex SVGs), SVG line animations (CPU/node graphics), and infinite marquee text integrations.
- **Fonts:** "Outfit" (Google Fonts) used heavily throughout for a premium, bold modern aesthetic. Inter is also a secondary font.

## Branching Strategy & Deployment
- **`main`**: Production code. **DO NOT merge work-in-progress directly here.** The `main` branch is reserved for final integrations.
- **`staging`**: Active development and integration testing branch. This branch is securely wired up to **Coolify**. All changes should happen and be pushed on `staging`. 

## Best Practices & Guidelines
1. **Security:** Avoid exposing `.env` files or API/webhook keys in the source. `.env` is strongly declared in `.gitignore`, and `.gitignore` itself is also ignored from public repositories when necessary.
2. **Library Safety:** Do not link to hypothetical CDN libraries or outdated packages. Validate that integration tools and scripts (like FontAwesome, Google Fonts) exist and load over HTTPS.
3. **Styling & Aesthetics:** Visually engage users with dark themes, distinct "cards," robust hover micro-interactions, and gradient highlights. The design must always look premium. Do *not* use handwritten/italic fonts for critical professional headings.
4. **Integrations Marquee:** The site includes a continuous infinite-scroll banner highlighting integrated tools (n8n, Zapier, Make, HighLevel, Apify, OpenAI, Asana, Monday, ClickUp, Webhooks). Ensure that when affiliate links are provided, they are mapped to these tools accurately. Untagged tools simply route to their official domains.
5. **Services Section:** In addition to industry-specific automations (Real Estate, Healthcare, Tech, etc.), OneZipp provides **Custom Web & App Development** integrating external API calls natively.

## Next LLM / AI Instance Instructions
If you are reading this file as a newly initialized Assistant (**Gemini Instance**):
1. **Branch Context:** Check out or ensure you remain in the `staging` branch.
2. **Commit Updates:** Whenever you make structural adjustments to the project, be sure to update this metadata file if the scope, stack, or core dependencies change.
3. **Run Checks:** Review responsive layouts across mobile sizes (`@media (max-width: 768px)`) whenever modifying card grids or Hero features. Ensure elements properly wrap and do not overflow cleanly.
4. **Workflow Files:** Familiarize yourself with `/workflows` and slash commands if configured within the environment.
5. **Specialized Sub-Agents & Rulesets:** You must proactively invoke specialized protocols, internal sub-agents, or strict rulesets for the following during every task:
   - **Security Checks Sub-Agent:** Continuously scan for and prevent exposed API keys, `.env` file mishandling, logic flaws, and ensure the authenticity of integrated external libraries/CDNs.
   - **Performance Optimization Sub-Agent:** Validate efficient code rendering, prioritize image/asset loading optimization, prevent UI layout thrashing, and minimize the footprint of scripts and animations (IntersectionObserver).
   - **Industry Standard UI/UX Sub-Agent:** Strictly enforce a premium aesthetic (modern 'Outfit' typography, aesthetic UI cards, hover micro-animations, color harmony, responsive precision) that aligns with top-tier agency deliverables.

## Current State Highlights
- Sticky headers (`.ind-grid` section) are mapped out using `position: sticky` on the `.section-head` to pin titles gracefully as the user scrolls.
- Integration links route safely via `_blank` anchors and `noopener noreferrer`.
- Webhook generic integration uses an standard SVG icon reference (`mdi:webhook.svg`) to avoid mismatched logo issues.

--- 
*This file ensures continuous alignment for AI-assisted development across different model instances and sessions.*
