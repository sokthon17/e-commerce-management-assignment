import { expect, test } from '@playwright/test';

test('should not have hydration errors', async ({ page }) => {
  const errors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      const text = msg.text();
      if (text.includes('hydration')) {
        errors.push(text);
      }
    }
  });

  await page.goto('http://localhost:3000');

  expect(errors).toEqual([]);
});
