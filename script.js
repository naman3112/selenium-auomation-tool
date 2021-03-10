require('chromedriver');
let wd = require('selenium-webdriver');
let browser = new wd.Builder().forBrowser('chrome').build();
let matchId=35193;
browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
