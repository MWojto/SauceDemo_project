import {test, expect} from '@playwright/test'


test("Login Valid Data", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible()
    await page.locator('[data-test="login-button"]').isVisible()
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click()
    await page.close()
})

test("Login Invalid Data", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByText('Swag Labs').isVisible()
    await page.locator('[data-test="login-button"]').isVisible()
    await page.locator('[data-test="username"]').fill('standard_user123')
    await page.locator('[data-test="password"]').fill('secret_sauce123')
    await page.locator('[data-test="login-button"]').click()
    await page.locator('[data-test="error"]').isVisible()
    await page.close()
})