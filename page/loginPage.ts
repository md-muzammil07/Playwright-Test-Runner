import { Page } from "playwright";

export default class loginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

//   public get elementLoginBtn() {
//     return this.page.$("//button[text()='LOGIN']");
//   }  or

  elementLoginBtn = async ()=> this.page.locator("//button[text()='LOGIN']");

//   public get elementPasswordTextField() {
//     return this.page.$("input[name='password']");
//   } or

elementPasswordTextField = async() => this.page.locator("input[name='password']");

//   public get elementEmailTextField() {
//     return this.page.$("input[name='email']");
//   } or

elementEmailTextField = async() => this.page.locator("input[name='email']")

  public async enterUserName(name:string){
    const ele = await this.elementEmailTextField();
    await ele?.fill(name)
  }

  public async enterPassword(pass:string){
    const ele = await this.elementPasswordTextField();
    await ele?.fill(pass)
  }
  public async clickLoginBtn() {
    const ele = await this.elementLoginBtn();
    await ele?.click();
}

public async login(username:string, password:string) {
   await this.enterUserName(username);
   await this.enterPassword(password);
   await this.clickLoginBtn
}

}
