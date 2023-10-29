import CommonFunctions from "../page/commonFunctionPage";
import HeaderPage from "../page/Headerpage";
import LoginPage from "../page/Loginpage";
import Env from "../utils/env";
import * as data from "../data/loginCred.json";
import { BrowserContext, expect, Page, test } from "@playwright/test";

test.describe("TC001", () => {
  // my pages
  let header: HeaderPage;
  let login: LoginPage;
  let common: CommonFunctions;
  let page: Page;
  let context : BrowserContext;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    await context.tracing.start({ screenshots: true, snapshots: true });
    const page = await context.newPage();
    header = new HeaderPage(page);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });
  test.afterAll( async ()=> {
    await context.tracing.stop({ path: "trace.zip" });
  })
  test.beforeEach(async ({page}) => {
    await page.goto("https://letcode.in/");
  });

  test("Login positive _ JIRA101", async ({page}) => {
    expect(page.url()).toBe("https://letcode.in/");

    await header.clickLoginLink();
    // expect(page.url()).toBe("https://letcode.in/signin");
    await login.enterUserName(data.UserName);
    await login.enterPassword(data.Password);
    await login.clickLoginBtn();
    const toaster = await common.toaster();
    expect(await toaster?.textContent()).toContain("Welcome");
    await header.clickSignUpLink();
  });
  test.skip("Login again", async () => {
    await header.clickLoginLink();
    await login.login("koushik350@gmail.com", "Pass123$");
    await page.waitForLoadState();
    expect(page.url()).toBe("https://letcode.in/");
  });

});
