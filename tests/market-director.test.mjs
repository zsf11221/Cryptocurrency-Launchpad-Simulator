import assert from 'node:assert/strict';
import handler, { config } from '../netlify/functions/market-director.mjs';

// Run with: node tests/market-director.test.mjs (Node 20+)
assert.equal(config.path, '/api/market-director');
const sample = { round:20, token:'BANANA', stage:'curve', marketCap:24000,
  lastPriceU:0.000024, changePct:1.2, mood:55, attention:47,
  volume20:1.2, taxBuy:2, taxSell:2 };
const req = (code='test-access', payload=sample) => new Request('https://example.netlify.app/api/market-director', {
  method:'POST', headers:{'content-type':'application/json','x-ai-access':code},
  body:JSON.stringify(payload)
});
const oldFetch=globalThis.fetch;
process.env.AI_API_BASE_URL='https://api.example.org/v1';
process.env.AI_MODEL='mock-model';
delete process.env.AI_API_KEY;
assert.equal((await handler(req())).status, 503);
process.env.AI_API_KEY='FAKE_KEY_FOR_TEST_ONLY';
process.env.AI_ACCESS_TOKEN='test-access';
assert.equal((await handler(req('wrong'))).status, 401);
assert.equal((await handler(req('test-access',{foo:'bad'}))).status, 422);
globalThis.fetch = async () => Response.json({choices:[{message:{content:JSON.stringify({
 type:'smart', headline:'虚构聪明钱信号', detail:'游戏里的一组模拟交易者关注代币，并测试小额交易。',
 intensity:2, kol:'buy', whale:'hold'
})}}]});
const good = await handler(req());
assert.equal(good.status, 200);
const result = await good.json();
assert.equal(result.directive.type,'smart');
assert.equal(result.directive.intensity,2);
globalThis.fetch = async () => Response.json({choices:[{message:{content:'NOT JSON'}}]});
assert.equal((await handler(req())).status,502);
globalThis.fetch=oldFetch;
console.log('PASS: auth, fallback, validation, fake provider');
