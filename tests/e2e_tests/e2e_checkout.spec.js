import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/login_page'

test('E2E checkout test (happy path)', async ({ page }) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user', 'secret_sauce')

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await page.locator('[data-test="firstName"]').fill('Mikolaj');
    await page.locator('[data-test="lastName"]').fill('Wojtowicz');
    await page.locator('[data-test="postalCode"]').fill('123141');
    await page.locator('[data-test="continue"]').click();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()
    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(page.locator('[data-test="complete-header"]')).toBeVisible()
})

test('E2E checkout test (no filled data)', async ({ page }) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user', 'secret_sauce')

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('div').filter({ hasText: /^Error: First Name is required$/ }).nth(1)).toBeVisible()

})

test('E2E checkout test (no password and ZIP code)', async ({ page }) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user', 'secret_sauce')

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await page.locator('[data-test="firstName"]').fill('Mikolaj')
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('div').filter({ hasText: /^Error: Last Name is required$/ }).nth(1)).toBeVisible()
})

test('E2E checkout test (no ZIP code)', async ({ page }) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user', 'secret_sauce')

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()
    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await page.locator('[data-test="firstName"]').fill('Mikolaj')
    await page.locator('[data-test="lastName"]').fill('Wojtowicz');
    await page.locator('[data-test="continue"]').click();
    await page.pause()
    await expect(page.locator('div').filter({ hasText: /^Error: Postal Code is required$/ }).nth(1)).toBeVisible()
})