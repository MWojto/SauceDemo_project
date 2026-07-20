import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login_page'

test('Removing items from the cart', async({page}) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user','secret_sauce')

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible()
    await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible()

    await expect(page.locator('//*[@id="shopping_cart_container"]/a/span')).toHaveText('4')

    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click()

    await page.goto('https://www.saucedemo.com/inventory.html')

    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeVisible()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toBeVisible()
})
