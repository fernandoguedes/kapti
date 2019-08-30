const expect = require('chai').expect;
const kapti = require('./index');

describe('Crawler', () => {
  it('getStaticPage: Should return a HTML object from static page', async () => {
    const results = await kapti.getStaticPage('http://globoesporte.globo.com/sc/futebol/campeonato-catarinense/')

		expect(results).to.not.undefined;
  });

  it('getDynamicPage: Should return a HTML object from dynamic page', async () => {
    const results = await kapti.getDynamicPage('https://www.cinesystem.com.br/cinemas/shopping-iguatemi-florianopolis/437', '#programacao_cinema > .row')

		expect(results).to.not.undefined;
  });
});
