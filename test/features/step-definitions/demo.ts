import {Given, When, Then} from "@wdio/cucumber-framework";

Given(/^The user wants to login$/, async function() {
    await browser.maximizeWindow()
    await browser.setTimeout({ implicit: 5000, pageLoad: 10000  })
    await browser.url('https://www.saucedemo.com/');
});

When(/^The user enters the username and password$/, async function() {
    
    const usernameInput = await $('#user-name');
    const passwordInput = await $('#password');  

    // Enter the credentials
    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');

    
    const loginButton = await $('#login-button');
    await loginButton.click();
});

Then(/^The user should be logged in the application$/, async function() {
    const inventoryPage = await $('#inventory_container'); 
    await expect(inventoryPage).toBeDisplayed();
    });

Given(/^A web page is opened$/, async function() {
    await browser.url("/inputs")
    await browser.setTimeout({ implicit: 5000, pageLoad: 10000  })
    await browser.maximizeWindow()
})

When(/^Perform web interactions$/, async function() {
   let num = 12345
   let strNum = num.toString()
   
    let inputField = await $(`[type=number]`)
   // await inputField.setValue(strNum)
   await inputField.click()
    
    for(let i=0; i<strNum.length; i++){
        let chatStr = strNum.charAt(i)
        await browser.pause(1000)
        await browser.keys(chatStr)
    }

    await browser.pause(3000)
    })
