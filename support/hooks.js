const {
  Before,
  After,
  AfterStep
} = require('@cucumber/cucumber');

const {
  chromium
} = require('playwright');

Before(async function () {

  this.browser = await chromium.launch({
    headless: false
  });

  this.page = await this.browser.newPage();

});

AfterStep(async function () {

  const screenshot = await this.page.screenshot({
    fullPage: true
  });

  await this.attach(
    screenshot,
    'image/png'
  );

});

After(async function () {

  await this.browser.close();

});
