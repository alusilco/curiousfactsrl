let url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const text = data.text; // Extraer el texto del dato curioso
    document.getElementById('data').innerText = text; // Mostrar el texto en el elemento con el id "data"
  })
  .catch(error => console.log(error));

