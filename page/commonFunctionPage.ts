import {Page  } from "playwright";

export default class commonFunction{
   private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    // public get toaster() {
    //     return this.page.$("div[role='alertdialog']")
    // }

    toaster = async () => this.page.waitForSelector("div[role='alertdialog']")
    


}