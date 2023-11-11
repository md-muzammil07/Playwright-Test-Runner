import { test } from "@playwright/test";
import * as auth from "../auth.json";
import nodemailer from "nodemailer";


const list = ["https://www.flipkart.com/apple-2022-macbook-air-m2-8-gb-256-gb-ssd-mac-os-monterey-mly33hn-a/p/itm0946c05e6335c?pid=COMGFB2GMCRXZG85&lid=LSTCOMGFB2GMCRXZG859PGKWX&marketplace=FLIPKART&q=laptop&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=5a944321-8f99-466d-9906-fed9a20c3c4c.COMGFB2GMCRXZG85.SEARCH&ppt=sp&ppn=sp&ssid=jquc3zw8ps0000001698586475987&qH=312f91285e048e09", "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d?pid=MOBGHWFHSV7GUFWA&lid=LSTMOBGHWFHSV7GUFWA3AV8J8&marketplace=FLIPKART&q=mobile+iphone&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=62f69607-2742-496c-9c58-d91ba9949c60.MOBGHWFHSV7GUFWA.SEARCH&ppt=sp&ppn=sp&ssid=tbb5lcy1xs0000001698586607818&qH=0747fed614fc520e"];
test("FlipKart Price Drop Notification", async({page}) => {
    // navigate to the FlipKart product page
    await page.goto(list[0]);
    //get the price of the product
    const price = await page.$eval("//div[@class='_30jeq3 _16Jk6d']", elm => elm.textContent);
    console.log(`Price: ${price}`);
    //remove the currency symbol from the price
    let currentPrice = price?.replace("₹", '')
    console.log(currentPrice);

    //send the email using nodemailer
    sendEmailNotification(currentPrice);

})

function sendEmailNotification(currentPrice: string | undefined) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: auth.email,
            pass: auth.password
        }
    });

    transporter.sendMail({
        from: "email",
        to: "password",
        subject: `Product has gone down in price`,
        // text:`The product is available at a lower price now, check it out here : ${link}`,
        html: `<p>The price of the product has dropped to ${currentPrice}</p><a href="${list}">click to open</a>`
    }, (error, info) => {
        if (error) {
            return error;
        } else {
            console.log(info);
        }
    });
}

