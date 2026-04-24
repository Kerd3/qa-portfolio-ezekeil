const { test, expect } = require('@playwright/test');

test('Add item to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.inventory_item button');

  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});

test('Add more items to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  
  await page.click('[data-test ="add-to-cart-sauce-labs-backpack"]');
  await page.click('[data-test ="add-to-cart-sauce-labs-bike-light"]');
  


  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('2');
});

test('Logging out of inventory', async({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/)

  await page.click('#react-burger-menu-btn');
  await page.click('[data-test="logout-sidebar-link"]')

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();

});