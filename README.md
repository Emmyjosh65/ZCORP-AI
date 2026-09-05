# 👑 ZEUS — ZCORP AI World-Class Static Frontend

This is the flat-file GitHub Pages / Render Static Site build for ZCORP AI.

## Upload

Replace the old `index.html`, `style.css`, and `main.js` in your repository with the files in this package.

For GitHub Pages:
- Repository: `Emmyjosh65/ZCORP-AI`
- Settings → Pages → Deploy from branch → `main` → `/ (root)`

For Render Static Site:
- Publish directory: `.`
- Build command: leave blank

## Fixed login flow

1. Create account.
2. Account is saved to localStorage.
3. The session is saved to localStorage.
4. Sign in with the same email/password.
5. ZEUS immediately switches from the auth screen to the dashboard.
6. Refreshing the page keeps the session.

## Included

- Premium responsive UI
- Home dashboard
- AI Chat
- Fast / Think / Research / Agent modes
- Research Lab
- Agent Command Center
- Code Studio
- Files workspace
- Memory
- History
- Export workspace
- Voice input where browser supports it
- Dark/light mode
- Settings
- Local admin overview
- Free / Plus / Pro / Ultra plans
- Pro and Ultra redemption codes
- Bank / Opay payment instructions
- WhatsApp payment notification
- Mobile sidebar and full-page scrolling

## Premium codes

PRO
- ZCORP-PRO-7K4M-2026
- ZCORP-PRO-9Q2X-2026
- ZCORP-PRO-X8L5-2026
- ZCORP-PRO-M3T7-2026
- ZCORP-PRO-V6N1-2026

ULTRA
- ZCORP-ULTRA-A9K2-2026
- ZCORP-ULTRA-F4Q8-2026
- ZCORP-ULTRA-H7M3-2026
- ZCORP-ULTRA-R5X9-2026
- ZCORP-ULTRA-Y2P6-2026

## Bank / Opay

Account name: CHRISTANA Godwin okon
Account number: 9066760078
Provider: Opay
WhatsApp: 09066760078
Email: zcorporg40@gmail.com

The site opens WhatsApp with a pre-filled payment notification. You manually verify the transfer before granting a paid plan, unless you later connect a secure payment-verification backend.

## Real Gemini

A browser-only static site must not contain a real Gemini secret key. If you have a secure Render backend, put its URL into ZEUS → Settings → AI backend URL. The frontend will try `/api/chat`, `/api/research`, `/api/agent`, and `/api/code` on that backend.

Never commit a real API key to GitHub.
