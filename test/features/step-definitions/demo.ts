import {Given, When, Then} from "@wdio/cucumber-framework";

Given(/^the user lanches the CURA web app$/, async function(){
    await browser.url("https://katalon-demo-cura.herokuapp.com/");
    await expect(browser).toHaveTitle("CURA Healthcare Service");
});

When(/^the user clicks on the Make Appointment button$/, async function(){
    await $("=Make Appointment").click();
});

Then(/^the login page should be displayed$/, async function() {
   await expect(browser).toHaveUrl(/.*#login/);
}); 
