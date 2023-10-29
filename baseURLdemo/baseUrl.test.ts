import { test } from "@playwright/test";

//local config
test.use ({
    baseURL: "https://letcode.in/"
})

test('login', async ({page}) => { 
    await page.goto("/edit")
 })