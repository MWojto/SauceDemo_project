import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login_page'

test('Item descriptions working', async({page}) => {
    const login = new LoginPage(page);

    await login.goToLoginPage();
    await login.login('standard_user','secret_sauce');

    await page.locator('[data-test="item-4-title-link"]').click();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();

    await page.locator('[data-test="item-0-title-link"]').click();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="item-sauce-labs-bike-light-img"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();

    await page.locator('[data-test="item-1-title-link"]').click();
    await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(page.locator('[data-test="item-sauce-labs-bolt-t-shirt-img"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();

    await page.close();
})

