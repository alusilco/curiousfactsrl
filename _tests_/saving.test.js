import {JSDOM} from 'jsdom'

const dom = new JSDOM('./index.html');

test('should save a fact into favorites', () => {
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod';  
  return fetch(url)
    });
