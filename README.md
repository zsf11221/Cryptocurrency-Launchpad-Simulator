# MEME.LAB V8.2 — Endless Meme Market Simulator

**中文 / English** · Open-source, browser-based, offline single-player meme-token simulation.

[▶ Play MEME.LAB](https://zsf11221.github.io/Cryptocurrency-Launchpad-Simulator/) · [白皮书 / Whitepaper](https://zsf11221.github.io/Cryptocurrency-Launchpad-Simulator/whitepaper.html) · [Creator @zsf11221](https://x.com/zsf11221)

## V8.2 — What's new / 更新

- **♾️ Unlimited rounds / 无限制回合.** Pause, resume, step or run at 1×, 2×, 5×. No forced finish after round 444.
- **100 virtual BNB** in the player wallet (formerly 10,000).
- **Token launch settings:** buy and sell tax each 0–10% (default 2% / 2%), treasury buy-and-burn (default 50% of collected fees) and buyback-to-hold (30%). Allocations must sum to 100% or less.
- **Taxes are actual simulation-accounting transfers.** Gross virtual BNB is debited, net BNB enters the pool, tax is credited to the treasury. The treasury periodically trades BNB for tokens, burning or holding its purchases.
- **Token accounting:** traders + AMM/curve pool + protocol locks + treasury-held tokens + all burned tokens = original 1,000,000,000 token genesis supply.
- **Rankings:** Top-100 token holders, market-wallet ROI leaderboard and a historical **browser-local** leaderboard (minimum 30 rounds to save a result).
- Token prices and portfolio value are shown in simulated USDT (U), while orders settle in simulated BNB.
- Existing smart money, KOL, whale, delayed copy trader and narrative-event system retained.
- Save/load with JSON import/export, local autosave and a shareable PNG scorecard.
- Mobile market, trade, intelligence and holders tabs retained.

## Run locally or deploy / 运行和部署

Open `index.html` directly, or enable GitHub Pages under **Settings → Pages → Deploy from a branch → main → /(root)**. No build command, backend, token wallet or dependencies are required.

## Accounting and player safety / 财务模拟说明

- **Buy:** BNB paid by the agent is split into configured tax and net pool input; the actual token amount follows the simplified bonding curve or AMM.
- **Sell:** Tokens enter the pool; the BNB payout is split into the player's proceeds and configured tax.
- **Treasury:** Every eight rounds, treasury-funded token purchases may be executed subject to its virtual BNB balance. Burn allocation permanently removes purchased tokens; buyback allocation retains purchased tokens in the treasury.
- **Supply:** Total genesis issuance remains 1B; simulated valuation uses circulating unburned supply, not a real token market cap. BNB/USDT is a static in-game reference quote.
- **Persistence:** V8.2 saves are separate from V8.1 because the tokenomics and starting assets changed. Charts retain approximately 900 most recent candles for bounded memory usage.

## Leaderboard limitations

The ROI ranking compares current AI wallets and the player using *simulated, marked-to-market values*. Historical results are saved **only in the current browser**; they are **not an online/global ranking** and are not tamper-proof. A global board requires authenticated players and authoritative server-side simulation.

## Disclaimer

All funds, trades, events, wallets and token figures are **fictional**. No actual blockchain token, wallet connection, real money or financial service is involved. Real public figures mentioned in fictional social catalysts are **not** represented as endorsing or participating. Not financial advice.

## Open source

MIT License © 2026 zsf11221. See [LICENSE](LICENSE).
