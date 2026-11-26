const { Given, When, Then } =
require('@cucumber/cucumber');
 
const { expect } =
require('@playwright/test');
 
const RegisterPage =
require('../pages/RegisterPage');
 
let registerPage;
 
let email;
 
Given('User launches browser',
async function () {
 
registerPage =
new RegisterPage(this.page);
 
});
 
Given('User navigates to application',
async function () {
 
await registerPage.navigate();
 
});
 
When('User clicks Signup Login',
async function () {
 
await registerPage
.clickSignupLogin();
 
});
 
When('User enters registration details',
async function () {
 
email =
`mohan${Date.now()}@gmail.com`;
 
await registerPage
.enterRegistration(email);
 
});
 
When('User clicks Signup button',
async function () {
 
await registerPage
.clickSignup();
 
});
 
Then('Account information page should display',
async function () {
 
await expect(
this.page.getByText(
'Enter Account Information'
)
).toBeVisible();
 
});
 
When('User fills account details',
async function () {
 
await registerPage
.fillAccountInformation();
 
});
 
When('User fills address details',
async function () {
 
await registerPage
.fillAddressInformation();
 
});
 
When('User clicks Create Account',
async function () {
 
await registerPage
.clickCreateAccount();
 
});
 
Then('Account should be created',
async function () {
 
await expect(
this.page.getByText(
'Account Created!'
)
).toBeVisible();
 
});
