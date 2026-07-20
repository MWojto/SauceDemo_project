import {test,expect} from '@playwright/test'
import { LoginPage } from '../../pages/login_page'

test('Visual regression test', async({page}) => {
    const login = new LoginPage(page)

    await login.goToLoginPage()
    await login.login('standard_user', 'secret_sauce')

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveScreenshot('inventory_page.png', {fullPage:true,
    maxDiffPixelRatio: 0.01, threshold: 0.01, animations: 'disabled',
    })

    await page.pause()
    
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page).toHaveScreenshot('cart_page.png', {fullPage:true,
    maxDiffPixelRatio: 0.01, threshold: 0.01, animations: 'disabled',
    })

    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    await expect(page).toHaveScreenshot('checkout_step_one_page.png', {fullPage:true,
    maxDiffPixelRatio: 0.01, threshold: 0.01, animations: 'disabled',
    })
    await page.locator('[data-test="firstName"]').fill('Mikolaj');
    await page.locator('[data-test="lastName"]').fill('Wojtowicz');
    await page.locator('[data-test="postalCode"]').fill('123141');

    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await expect(page).toHaveScreenshot('checkout_step_two_page.png', {fullPage:true,
    maxDiffPixelRatio: 0.01, threshold: 0.01, animations: 'disabled',
    })

    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(page).toHaveScreenshot('checkout_complete_page.png', {fullPage:true,
    maxDiffPixelRatio: 0.01, threshold: 0.01, animations: 'disabled',
    })
})
