import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Password Generator');
});

test('h1 heading', async ({ page }) => {
  await page.goto('/');

  const locator = page.locator('h1');

  await expect(locator).toContainText('Password Generator');
});
