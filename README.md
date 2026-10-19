# MEME.LAB · Meme Coin Market Simulator

**MEME.LAB V8.1** 是一款免费、单机、离线的 Meme 币市场模拟游戏。玩家使用虚拟 BNB 从零发行代币，在 **444 回合**中交易、做市，并观察散户、KOL、聪明钱、巨鲸与跟单钱包如何影响市场。

**Free, single-player market simulation. All BNB, token balances and USDT valuations are fictional. No real assets, wallets or blockchain transactions.**

## 🎮 Play / 开始游戏

**[▶ Play MEME.LAB V8.1](https://zsf11221.github.io/Cryptocurrency-Launchpad-Simulator/)** · [中文版 / English Whitepaper](https://zsf11221.github.io/Cryptocurrency-Launchpad-Simulator/whitepaper.html)

GitHub Pages 必须先在仓库 **Settings → Pages** 配置并完成部署，上述试玩链接才会生效。也可下载本仓库并直接打开 `index.html`。

## Features / 功能

- 444 rounds, up to 5× speed / 444 回合，最高 5 倍速
- Fixed supply of 1 billion simulated tokens / 10 亿枚虚拟代币
- Player starts with 10,000 **virtual BNB** / 玩家起始虚拟资金
- Bonding curve launch → possible DEX graduation / 联合曲线发射与模拟 DEX 毕业
- Retail traders, KOLs, whales, smart money and delayed copy-trading wallets / 多类独立资金钱包
- Market candlesticks, wallet leaderboards and event feed / K 线、Top 100 持仓与资金动态
- Mobile market / trading / intel / holders views / 手机四页签
- Tutorial, local saves, JSON import/export and PNG result card / 新手引导、存档与战绩卡
- Token prices, holding averages and valuation shown in simulated USDT (U), while trades settle in virtual BNB

**Important:** CZ, 何一 and other real-world names are referenced solely as *fictional market-simulation events* and are not evidence of endorsement or involvement.

## Repository contents / 文件结构

```
index.html          Single-file game frontend
whitepaper.html     Bilingual game design and mechanics
README.md           Documentation
LICENSE             MIT license
CHANGELOG.md        Version notes
.gitignore          Git ignore rules
.nojekyll           GitHub Pages static publishing helper
docs/screenshots/   Screenshots (when provided)
```

## Deploy with GitHub Pages

1. Open [repository Settings → Pages](https://github.com/zsf11221/Cryptocurrency-Launchpad-Simulator/settings/pages).
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main**, **/(root)**, then click **Save**.
4. Wait for publication and check [the game website](https://zsf11221.github.io/Cryptocurrency-Launchpad-Simulator/).

No backend, npm install or build step is required.

## Limitations / 限制

- Local single-player simulation, not shared multiplayer
- Fake balances, orders, events and BNB/USDT reference prices
- No real smart contracts, crypto assets or investing instructions
- Browser saves are local; export JSON to back up
- Public testing build; no third-party security audit is claimed

## License / 开源许可

MIT License, © 2026 zsf11221. See [LICENSE](LICENSE).

Creator: [@zsf11221](https://x.com/zsf11221). Feedback and bugs: [GitHub Issues](https://github.com/zsf11221/Cryptocurrency-Launchpad-Simulator/issues).
