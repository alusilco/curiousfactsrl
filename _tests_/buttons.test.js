
const {
   saveFavorites
    
} = require('../javascript/buttons.js');

describe('function "saveFavorites"', () => {
    it('should be declared', () => {
        expect(typeof saveFavorites).toBe('function');
    });
})



const {
  fetchData
} = require('../javascript/buttons.js');describe("function 'fetchData'", () => {
  test('should be declared as a function', () => {
    expect(typeof fetchData).toBe('function');
  });
});


const {
  showFavorites
  } = require('../javascript/buttons.js');
describe("function 'showFavorites'", () => {
  test('should be declared as a function', () => {
    expect(typeof showFavorites).toBe('function');
  });
});



test('should save a fact into favorites', () => {
  const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';  
return fetch(url)
  .then(response => response.json())
  .then(data => {
    const fact = data.text;
    expect(fact).toBe(text);
    return saveFavorites(fact);
  });
}); 



const { JSDOM } = require('jsdom');
const { showFavorites } = require('../javascript/buttons.js');
describe("function 'showFavorites'", () => {
  test('should display favorites in the table', () => {
    const dom = new JSDOM(`
      <html>
        <body>
          <table>
            <tbody id=“favorites-list”></tbody>
          </table>
        </body>
      </html>
    `);
    const tbodyElement = dom.window.document.getElementById('favorites-list');    
    const storedFavorites = ['Favorite 1', 'Favorite 2', 'Favorite 3'];
    global.localStorage = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(storedFavorites)),
    };    showFavorites(tbodyElement);    const trElements = 
tbodyElement.getElementsByTagName('tr');
    expect(trElements.length).toBe(storedFavorites.length);    for (let i = 0; i < 
trElements.length; i++) {
      const tdElement = trElements[i].getElementsByTagName('td')[0];
      expect(tdElement.textContent).toBe(storedFavorites[i]);
    }
  });
}); 