import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(path.resolve('../worm-capitalist-wiki/package.json'));
const { chromium } = require('@playwright/test');
const url = 'https://html-classic.itch.zone/html/18906721/SHIFT_MONITOR%201998/index.html?v=1787394666';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = { url, checkedAt: new Date().toISOString(), scope: 'Natural UI actions on the developer-linked live HTML build, no game state injection.', observations: [], errors: [] };
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 850 } });
  page.on('pageerror', e => report.errors.push(e.message));
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
  report.status = response.status();
  for (let cam = 1; cam <= 4; cam++) {
    await page.locator(`#btn-cam${cam}`).click();
    report.observations.push({ action: `click CAM ${cam}`, label: await page.locator('#cam-label').innerText() });
  }
  let found = false;
  for (let attempt = 0; attempt < 40 && !found; attempt++) {
    if (await page.locator('#gameover').isVisible()) await page.getByRole('button', { name: 'RESTART SYSTEM' }).click();
    const cam = attempt % 4 + 1;
    await page.locator(`#btn-cam${cam}`).click();
    if (await page.locator('#entity').isVisible()) {
      found = true;
      await page.screenshot({ path: 'quality/artifacts/sources/game-anomaly.png' });
      const before = await page.locator('#signal-status').innerText();
      await page.locator(`#btn-cam${cam === 4 ? 1 : cam + 1}`).click();
      const other = { entityVisible: await page.locator('#entity').isVisible(), text: await page.locator('#signal-status').innerText() };
      await page.locator(`#btn-cam${cam}`).click();
      await page.getByRole('button', { name: /PURGE SIGNAL/ }).click();
      const after = { entityVisible: await page.locator('#entity').isVisible(), text: await page.locator('#signal-status').innerText() };
      report.observations.push({ action: 'find natural anomaly, change feed, return and purge', cam, before, other, after });
      if (after.entityVisible || after.text !== 'SIGNAL: STABLE') throw new Error('Purge did not clear observed anomaly');
    } else await page.waitForTimeout(250);
  }
  if (!found) throw new Error('No natural anomaly observed in bounded interval');
  await page.screenshot({ path: 'quality/artifacts/sources/game-stable.png' });
  report.completed = true;
} catch (error) { report.failure = error.message; process.exitCode = 1; }
finally { fs.writeFileSync('quality/artifacts/sources/game-observation.json', JSON.stringify(report, null, 2)); await browser.close(); }
console.log(JSON.stringify(report));
