//launch flipkart in edge browser 
import { test,chromium } from "@playwright/test";
test(`Launch flipkart in edge`, async () => {
// Create a browser instance
const browser = await chromium.launch({headless: false, channel: "msedge"});
// Create the browser context
const context = await browser.newContext();
// Create a new page
const page = await context.newPage();
// Load the url
await page.goto("https://www.flipkart.com/");
console.log(await page.title())
console.log(await page.url())
})

//launch Redbus in chrome browser
test(`Launch flipkart in chrome`, async () => {
// Create a browser instance
const browser = await chromium.launch({headless: false, channel: "chrome"});
// Create the browser context
const context = await browser.newContext();
// Create a new page
const page = await context.newPage();
// Load the url
await page.goto("https://www.redbus.in");
console.log(await page.title())
console.log(await page.url())
})
