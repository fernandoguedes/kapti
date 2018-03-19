const request = require('request-promise');
const $ = require('cheerio');

const getStaticPage = (url) => {
  const options = {
    uri: url,
    headers: {},
    transform: (body) => {
      return $.load(body);
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

module.exports = { getStaticPage };
