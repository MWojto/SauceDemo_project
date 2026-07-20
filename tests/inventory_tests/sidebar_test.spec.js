import {test, expect} from '@playwright/test'
import { LoginPage } from '../../pages/login_page'

test('About button interaction', async({page}) => {
    const login = new LoginPage(page);

    await login.goToLoginPage();
    await login.login('standard_user','secret_sauce');
    
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="about-sidebar-link"]').click();
    await expect(page).toHaveURL('https://saucelabs.com/');
})

test('All items button interaction', async({page}) => {
    const login = new LoginPage(page);

    await login.goToLoginPage();
    await login.login('standard_user','secret_sauce');
    
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="inventory-sidebar-link"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await page.close();
})