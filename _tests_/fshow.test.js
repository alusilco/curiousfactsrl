import {JSDOM} from 'jsdom'

global.document = new JSDOM('./index.html').window.document;

const {
    showFavorites
    } = require('../javascript/buttons.js');
  describe("function 'showFavorites'", () => {
    test('should be declared as a function', () => {
      expect(typeof showFavorites).toBe('function');
    });
  });


