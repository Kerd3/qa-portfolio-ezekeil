const { test, expect } = require('@playwright/test');

test('Valid login test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);
});

test('Invalid login test', async({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'invalid_password');
  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

test('Empty username field', async({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', '');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Username is required'
  );
});

test('Empty password field', async({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', '');
  await page.click('#login-button');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText(
    'Epic sadface: Password is required'
  );
});