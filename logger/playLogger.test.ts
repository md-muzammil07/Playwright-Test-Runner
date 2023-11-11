import { chromium, test } from "@playwright/test";

test("Logger", async ({page}) => {
//   const browser = await chromium.launch({
    // logger: {
    //     isEnabled: (name, severity) => true,
    //     log: (name, severity, message, args) => console.log(`${name} ${message}`)
    //   }

//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();

const consoleLogs = [];
page.on("console", msg => {
    if(msg.type()== "error") { // this will print only the error.
        console.log(msg.text());
        consoleLogs.push(msg.text());
    }
})
  await page.goto("https://letcode.in/elements");
  const btn = page.locator("#search");
  await btn.click();

  await page.goto("https://www.amazon.in/error")
})