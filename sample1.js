import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://shopee.com.my/cadbury_oreo_officialstore#product_list');
  //GET all product list - https://shopee.com.my/api/v4/shop/rcmd_items?bundle=shop_page_category_tab_main&limit=30&offset=60&shop_id=59165532&sort_type=1&upstream=


  const url = await page.url();
  console.log(url);

  const content = await page.content();
  console.log(content);

  await browser.close();
})();