import {expect, test } from "@playwright/test";

test('Select element based on page layout', async({page}) => { 
    await page.goto("https://github.com/login");
    await page.fill("input:below(:text('Username or'))", "Muzammil");
    await page.fill("#password:above(:text('Sign in'))", "password");
    await page.click("a:near(:text('password'))");
    expect(page.url()).toBe("https://github.com/password_reset");
 })

 test.only("In depth", async ({ page }) => {
    await page.goto('https://produkte.banking.ing.de/pub/kontaktformular?x=fyPlIBhKUUWg');
    // await page.pause();
    await page.fill("input:below(:text('IBAN')):right-of(:text('First name'))" , "muzamil")
})