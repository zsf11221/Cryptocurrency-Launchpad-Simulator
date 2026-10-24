# MEME.LAB V8.3 — AI Market Director

Open-source, fictional BNB-based Meme token market simulator with unlimited rounds, a 100 BNB virtual start, adjustable buy/sell taxes, treasury buybacks/burns, precise FDV audit and local leaderboards.

V8.3 adds **optional AI-directed market narratives and bounded role decisions**, without changing the pricing or supply ledger. Everything is simulated; this is not an exchange and contains no real-world endorsement.

## Play

- Open `index.html` for fully offline game (AI disabled/fallback).
- Use Netlify Git deployment for AI mode. GitHub Pages can serve the game but **not** the Netlify Function; AI cannot run on GitHub Pages alone.
- [Whitepaper](whitepaper.html) and [Changelog](CHANGELOG.md).

## AI integration (OpenAI-compatible Chat Completions)

1. Connect `zsf11221/Cryptocurrency-Launchpad-Simulator` to Netlify and use the included `netlify.toml` settings. **Do not use a drag-and-drop-only deploy for functions.**
2. In **Netlify → Site configuration → Environment variables**, set `AI_API_BASE_URL` (e.g. `https://api.openai.com/v1`), `AI_MODEL`, `AI_API_KEY` (a NEW, rotated provider key) and `AI_ACCESS_TOKEN` (a separate private visitor access code, NOT the provider's API key). Use Functions runtime scope, then redeploy. Never place secrets in any tracked file, README, URL, browser console or chat.
3. Open the deployed game, launch a token, go to **情报 → AI 市场导演**. Enable AI, enter the private visitor access code and check connection. Every 20 rounds it makes at most one non-blocking request, plus an explicitly requested manual test. AI server failures fall back to local game rules. The Function endpoint is `/api/market-director`.
4. For provider models requiring `max_completion_tokens` rather than `max_tokens`, set `AI_TOKEN_PARAM=max_completion_tokens` and redeploy.
5. Set a **hard monthly spending cap** in your API provider dashboard and Netlify usage alerts. Per-IP rate limiting is not a shared/global budget guarantee.

**Access safety:** the provider key is used only by `netlify/functions/market-director.mjs` on the server. In default private mode, requests also require `AI_ACCESS_TOKEN` entered manually by the authorized tester; the client never persists this passcode. Setting `AI_PUBLIC_MODE=true` allows unauthenticated access only when `AI_ACCESS_TOKEN` is absent. Avoid public mode with a personal paid API key until using dedicated authentication and a globally enforced allowance.

**Deployment separation:** `netlify.toml` copies just `index.html` and `whitepaper.html` into `dist/`, leaving Function code outside the public directory. GitHub Pages continues to load root `index.html`, but will use local AI fallback.

## Game engine invariants

- AI response is a compact structured directive: `headline`, `detail`, `type`, `intensity`, `kol`, `whale`.
- Local validation restricts actions to `buy/sell/hold`, strengths to 1–3, and restricts transaction sizes to available wallets.
- AI cannot directly change pool price, the 1B original token supply, tax balances, LP share ownership, wallets or burned balances.
- Late AI replies expire; idle/paused games never require an external model to progress. Imported V8.2/V8.2.1 saves turn AI off until explicitly re-enabled.
- Local rankings are **not** an online leaderboard.

## Licenses and credits

MIT © 2026 zsf11221. See `LICENSE`. Creator: [@zsf11221](https://x.com/zsf11221).