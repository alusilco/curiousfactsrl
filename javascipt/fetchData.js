

function fetchData() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then(data => {
      let text = data.text; // Extrae el texto del dato curioso
      document.getElementById('data').innerText = text; // Muestra el texto en el elemento con el id "data"
    })
    .catch(error => console.log(error));
}

