import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://shopee.com.my/');

  const url = await page.url();
  console.log(url);

  const content = await page.content();
  console.log(content);

  await browser.close();
})();