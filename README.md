# ZCORP AI

**ZCORP AI** is the ZEUS premium AI platform owned by **ZCORP ORG**.

Built as a production-oriented Next.js application with:
- Username/password accounts
- Required ZCORP policy agreement
- Free / Plus / Pro / Ultra tiers
- Hidden premium-code redemption
- Gemini AI chat
- Optional Google Search grounding for research mode
- File upload support for Gemini
- Memory stored per user
- Agent / Code modes
- Voice UI hook (browser speech recognition/synthesis)
- User dashboard
- Admin dashboard
- Payment/upgrade architecture
- Optional WhatsApp Cloud API payment notifications
- Production environment configuration

## Important security notes

1. **Never put your Gemini API key in client-side code or GitHub.** Google recommends environment variables such as `GEMINI_API_KEY`. See the official Gemini API docs: https://ai.google.dev/gemini-api/docs/api-key
2. The ten premium codes are intentionally **not hard-coded into the public repository**. Put them in `PREMIUM_CODES` as a Vercel/server environment variable.
3. The Opay account is configurable through environment variables. The app does not claim that a payment was verified just because a user submitted a reference.
4. Automatic WhatsApp delivery requires WhatsApp Cloud API credentials. Without those credentials, the app creates a WhatsApp chat link for the user to open manually.

## 1. Install

Requirements:
- Node.js 20+
- PostgreSQL database
- Gemini API key

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`.

## 2. Database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

For production:

```bash
npx prisma migrate deploy
```

## 3. Run

```bash
npm run dev
```

Open http://localhost:3000

## 4. Deploy to Vercel

1. Create a GitHub repository named `zcorp-ai` under the ZCORP ORG GitHub organization.
2. Upload/push this project.
3. Import the repository into Vercel.
4. Add every variable from `.env.example` to Vercel Project Settings → Environment Variables.
5. Use a hosted PostgreSQL database (Neon, Supabase, Railway, etc.).
6. Deploy.
7. Run the migration against the production database:

```bash
npx prisma migrate deploy
```

## 5. Premium codes

Set:

```text
PREMIUM_CODES=zcorpai-001-X7K9,zcorpai-002-Q4M2,...
```

The API only accepts each code once and stores a hash rather than the raw code.

## 6. WhatsApp

For true server-side automatic messages, configure:

```text
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_RECIPIENT_NUMBER=
```

The code uses the WhatsApp Cloud API endpoint. If these are missing, the app falls back to a click-to-chat URL.

## ZCORP ORG identity

Official website: https://zcorp-org-co.vercel.app/
WhatsApp channel: https://whatsapp.com/channel/0029VbCoI29AYlUOb6Bdpo30
Telegram group: https://t.me/+M8TTeOV7ElpjMDk0
Telegram channel: https://t.me/zcorporg
Email: zcorporg40@gmail.com

The public website currently describes ZCORP ORG as a creative web-development organization that builds websites, web apps, dashboards, gaming platforms, digital tools and custom digital experiences. It also presents the slogan “BUILD. CREATE. SELL. INNOVATE.”

## Payment

The current upgrade page displays the supplied Opay payment details:

- Account number: 9066760078
- Provider: Opay
- Account name: CHRISTANA Godwin okon

Payment details are environment-configurable and should be verified by ZCORP before granting paid access.

## License

Private/proprietary project for ZCORP ORG. Do not redistribute without authorization.
