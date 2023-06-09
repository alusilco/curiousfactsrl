const fetch = require('node-fetch');

test('should fetch a random useless fact', () => {
  const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const text = data.text;
      expect(text).toBeTruthy();
    });
});