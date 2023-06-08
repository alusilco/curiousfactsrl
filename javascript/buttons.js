let addFavorites = [];

function fetchData() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then(data => {
      let text = data.text; // Extrae el texto del dato curioso
      document.getElementById('data').innerText = text; // Muestra el texto en el elemento con el id "data"
      addFavorites.push(text); // Agrega el favorito al array addFavorites
    })
    .catch(error => console.log(error));
}

function saveFavorites() {
  localStorage.setItem('addFavorites', JSON.stringify(addFavorites)); // Guarda los favoritos en localStorage
}

function showFavorites() {
  let storedFavorites = JSON.parse(localStorage.getItem('addFavorites'));
  if (storedFavorites) {
    storedFavorites.forEach(favorite => {
      console.log(favorite);
    });
  }
}

