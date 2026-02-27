---
description: Auto-commit, push to GitHub, and deploy to Vercel
---

# Commit & Deploy Workflow

Use this after completing meaningful changes. Run every 5–10 edits or at logical save-points.

## Steps

// turbo-all

1. Check for secrets or API keys before committing:
```bash
cd /Users/pratik/Documents/n8n-flows/antigravity-landing && grep -rn "sk-\|api_key\|secret\|password\|token" --include="*.html" --include="*.js" --include="*.json" . || echo "✅ No secrets found"
```

2. Stage all changes:
```bash
cd /Users/pratik/Documents/n8n-flows/antigravity-landing && git add -A
```

3. Commit with a descriptive message (replace MESSAGE with context):
```bash
cd /Users/pratik/Documents/n8n-flows/antigravity-landing && git status --short && git diff --cached --stat
```

4. Push to GitHub main:
```bash
cd /Users/pratik/Documents/n8n-flows/antigravity-landing && git push origin main
```

5. Deploy to Vercel production:
```bash
cd /Users/pratik/Documents/n8n-flows/antigravity-landing && vercel --prod --yes
```

6. Verify deployment:
```bash
echo "✅ Deployed to https://antigravity-landing-three.vercel.app"
```

## Security Checklist (before every commit)
- [ ] No API keys, tokens, or secrets in code
- [ ] No .env files committed
- [ ] No hardcoded passwords
- [ ] CSP meta tag present in index.html
- [ ] External scripts from trusted sources only
