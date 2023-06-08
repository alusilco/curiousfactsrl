let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const text = data.text;
    document.getElementById('data').innerText = text;
  })
  .catch(error => console.log(error));