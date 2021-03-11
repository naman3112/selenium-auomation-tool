require('chromedriver');
let wd = require('selenium-webdriver');
let browser = new wd.Builder().forBrowser('chrome').build();
let matchId=35193;

async function main(){
await browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
let buttons = await (await browser).findElements(wd.By.css(".cb-nav-bar a"));
await buttons[1].click();
await browser.wait(wd.until.elementLocated(wd.By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr")));
let tables =  await browser.findElements(wd.By.css(".cb-col.cb-col-100.cb-ltst-wgt-hdr"));
console.log( tables.length +"in the ");
}
main();

