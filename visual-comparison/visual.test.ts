import { expect, test } from "playwright/test";

test('visual', async({page}) => { 
    await page.goto("https://letcode.in/");
    expect(await page.screenshot({
        fullPage:true
    })).toMatchSnapshot("landing.png")
 })