# Changelog

## 8.3 — Optional AI Market Director

- Optional server-side AI market story and bounded KOL/whale trade signals, every 20 rounds at most.
- OpenAI-compatible provider integration through a Netlify Function; model/API URL/key configurable via private Netlify environment variables.
- Strict server request limits, response validation, request timeout, optional separate access code and per-IP rate limiting.
- Added AI control panel to desktop and mobile 情报 view; local fallback when unavailable.
- Kept V8.2.1 FDV and burn audit, infinite rounds, 100 virtual BNB start, treasury tokenomics and local rankings.
- AI prices and trades are never authoritative: transactions still use the simulated AMM and finite wallets.

## 8.2.1 — FDV and burn audit

- Explicit supply and valuation reconciliation using the same-round source ledger.
