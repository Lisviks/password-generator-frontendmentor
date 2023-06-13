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

test('password output element visible', async ({ page }) => {
  await page.goto('/');
  const locator = page.locator('.result input');
  await expect(locator).toBeVisible();
});

test('character length visible', async ({ page }) => {
  await page.goto('/');
  const locator = page.locator('.character-length p span').nth(1);
  await expect(locator).toBeVisible();
});

test('4 include character options visible', async ({ page }) => {
  await page.goto('/');
  const locator = page.locator('label');
  await expect(locator).toContainText([
    'Include Uppercase Letters',
    'Include Lowercase Letters',
    'Include Numbers',
    'Include Symbols',
  ]);
});

test('generate button visible', async ({ page }) => {
  await page.goto('/');
  const locator = page.locator(' form button');
  await expect(locator).toBeVisible();
});
