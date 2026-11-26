const data =
require('../test-data/userData');
 
const Locators =
require('../locators/RegisterPageLocators');
 
class RegisterPage {
 
constructor(page){
 
this.page = page;
 
this.loc =
new Locators();
}
 
async navigate(){
 
await this.page.goto(
'https://automationexercise.com'
);
}
 
async clickSignupLogin(){
 
await this.page.locator(
this.loc.signupLogin
).click();
}
 
async enterRegistration(email){
 
await this.page.locator(
this.loc.signupName
).fill(data.name);
 
await this.page.locator(
this.loc.signupEmail
).fill(email);
}
 
async clickSignup(){
 
await this.page.locator(
this.loc.signupButton
).click();
}
 
async fillAccountInformation(){
 
await this.page.locator(
this.loc.gender
).check();
 
await this.page.locator(
this.loc.password
).fill(data.password);
 
await this.page.selectOption(
this.loc.day,'10');
 
await this.page.selectOption(
this.loc.month,'5');
 
await this.page.selectOption(
this.loc.year,'1995');
}
 
async fillAddressInformation(){
 
await this.page.locator(
this.loc.firstName
).fill(data.firstName);
 
await this.page.locator(
this.loc.lastName
).fill(data.lastName);
 
await this.page.locator(
this.loc.company
).fill(data.company);
 
await this.page.locator(
this.loc.address1
).fill(data.address1);
 
await this.page.locator(
this.loc.address2
).fill(data.address2);
 
await this.page.selectOption(
this.loc.country,
'India'
);
 
await this.page.locator(
this.loc.state
).fill(data.state);
 
await this.page.locator(
this.loc.city
).fill(data.city);
 
await this.page.locator(
this.loc.zipcode
).fill(data.zipcode);
 
await this.page.locator(
this.loc.mobile
).fill(data.mobile);
}
 
async clickCreateAccount(){
 
await this.page.locator(
this.loc.createAccount
).click();
}
}
 
module.exports = RegisterPage;
