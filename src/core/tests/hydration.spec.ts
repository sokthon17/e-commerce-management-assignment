import { test } from '@playwright/test';

test('check for hydration warnings', async ({ page }) => {
  const messages: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error' && msg.text().includes('hydration')) {
      messages.push(msg.text());
    }
  });
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);

  if (messages.length > 0) {
    throw new Error(`Hydration warnings detected:\n${messages.join('\n')}`);
  }
});
