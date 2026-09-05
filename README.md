# 👑 ZEUS — ZCORP AI (Render Static Frontend)

This is the mobile-first ZCORP AI frontend. Accounts, sessions, memories, chat history, files and plan state are stored in the browser with localStorage.

## What is included
- Login + Create Account UI
- LocalStorage account/session persistence
- Real Gemini AI through a secure Render backend
- Fast / Think / Research / Agent modes
- Research mode with Gemini web search
- Agent planning workspace
- Code Studio with AI explain/refactor/review
- File workspace and local metadata
- Local memory
- Conversation history and export
- Voice input when browser supports it
- Pro + Ultra premium-code redemption
- bank/Opay payment submission + server verification
- Dark/light mode
- Mobile responsive layout and page scrolling
- Settings page for changing the backend URL

## Render Static Site
Create **New → Static Site** and connect this folder/repository.

- Build Command: leave empty
- Publish Directory: `.`

If Render asks for a rewrite, add:
- Source: `/*`
- Destination: `/index.html`
- Action: Rewrite

## Backend URL
The frontend defaults to:
`https://zcorp-ai-backend.onrender.com`

If your backend has a different Render URL, open **Settings → AI backend URL** inside ZEUS and save the correct URL. It is stored locally.

## Security
Never place your Gemini secret key or bank/Opay secret key in this frontend. The browser must only talk to your backend. Render environment variables are the correct place for server secrets.
