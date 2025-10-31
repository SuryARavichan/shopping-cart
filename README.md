# Shopping Chat Agent (Mobiles)


A take-home project implementing an AI-powered shopping chat agent focused on mobile phones. Built with Next.js and React for the frontend, a small serverless API for LLM orchestration, and a realistic JSON mock catalog.


## Features
- Natural-language shopping queries (e.g., "Best camera phone under ₹30k?").
- Structured retrieval from a mock phones database.
- 2–3 model comparison with clear specs and trade-offs.
- Explainability: each recommendation includes rationale.
- Safety & adversarial handling (refuses hidden prompts, keys, toxic requests).
- Minimal mobile-friendly UI with product cards and a comparison view.


## Tech Stack
- Next.js (React) — UI + serverless API routes
- Tailwind CSS — rapid styling
- Node.js — server runtime
- OpenAI or Google Gemini — LLM (configurable)
- Jest — unit tests


## Setup
1. Install dependencies:


```bash
npm install



Environmental File:

cp .env.example .env


Locally running in the machine

npm run dev


Deployment:

Deploy to Vercel (recommended):

Connect your GitHub repo to Vercel and set the same environment variables in Vercel's dashboard.

Vercel auto-deploys Next.js projects.
