import {test, expect} from '@playwright/test'

test('Logout from homepage', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').isVisible();
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible();
    await page.close();
})

test('Logout from cart', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').isVisible();
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible();
    await page.close();
})

test('Logout from checkout-step-one', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').isVisible();
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
})

test('Logout from checkout-step-two', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').isVisible();
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.locator('[data-test="firstName"]').fill('Mikolaj');
    await page.locator('[data-test="lastName"]').fill('Wojtowicz');
    await page.locator('[data-test="postalCode"]').fill('123141');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible();
    await page.close();
})

test('Logout from the checkout complete page', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByText('Swag Labs').isVisible();
    await page.locator('[data-test="login-button"]').isVisible();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await page.locator('[data-test="firstName"]').fill('Mikolaj');
    await page.locator('[data-test="lastName"]').fill('Wojtowicz');
    await page.locator('[data-test="postalCode"]').fill('123141');
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible();
    await page.close();
})