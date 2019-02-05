const request = require('request-promise');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const getStaticPage = (url) => {
  const options = {
    uri: url,
    headers: {},
    transform: (body) => {
      return cheerio.load(body);
    }
  };

	return new Promise((resolve, reject) => {
    request(options)
      .then($ => {
        resolve($);
      })
      .catch(error => {
        reject(error);
      });
	});
};

const getDynamicPage = (url) => {
  // @TODO: Passar por parâmetro seletor que o load deve aguardar
  return new Promise(async function (resolve, reject) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'load', timeout: 0 });

    await page.waitFor('.nome-cinema')

    let html = await page.content()

    browser.close();

    let $ = cheerio.load(html)

    resolve($);
  });
};

module.exports = {
  getStaticPage,
  getDynamicPage
};
