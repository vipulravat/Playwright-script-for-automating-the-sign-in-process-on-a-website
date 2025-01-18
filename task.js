const { chromium } = require('playwright');

(async () => {

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto('https://vipsravat-trials714.orangehrmlive.com/auth/login'); 

    
    try {
        await page.waitForSelector('input[id="txtUsername"]', { timeout: 60000 });
        console.log('Username field is visible.');
    } catch (error) {
        console.error('Error waiting for username field:', error);
        await browser.close();
        return;
    }


    await page.fill('input[id="txtUsername"]', 'Admin'); 
    await page.fill('input[id="txtPassword"]', '9r4FXbQ@wR'); 

    await page.click('button[type="submit"]');
    try {
        await page.waitForNavigation({ timeout: 60000 }); 
    } catch (error) {
        console.error('Navigation failed:', error);
        await browser.close();
        return;
    }

    
    await page.waitForTimeout(2000); 

    
    const isLoggedIn = await page.isVisible('div#welcome');
    if (isLoggedIn) {
        console.log('Sign-in failed!');
    } else {
        console.log('Sign-in successful.');
    }

    await page.waitForTimeout(2000);
    await browser.close();

})();
