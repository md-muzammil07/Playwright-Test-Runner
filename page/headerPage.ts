import { Page } from "playwright";

export default class headerPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //locators

  public get elementLoginBtn() {
    const loginBtn = this.page.$("text=Log in");
    if (loginBtn != null) {
      return loginBtn;
    } else throw new Error("No Element");
  }

  public get elementSignUpBtn() {
    const signUpBtn = this.page.$("text=Sign out");
    if (signUpBtn != null) {
      return signUpBtn;
    } else throw new Error("No element");
  }

  public async clickLoginLink() {
    const ele = await this.elementLoginBtn;
    await ele?.click();
  }

  public async clickSignUpLink() {
    const ele = await this.elementSignUpBtn;
    await ele?.click();
  }
}
