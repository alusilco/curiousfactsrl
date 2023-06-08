let addFavorites = [];

function fetchData() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then(data => {
      let text = data.text; 
      document.getElementById('data').innerText = text; 
      addFavorites.push(text);
    })
    .catch(error => console.log(error));
}

function saveFavorites() {
  localStorage.setItem('addFavorites', JSON.stringify(addFavorites));
}

function showFavorites() {
  let storedFavorites = JSON.parse(localStorage.getItem('addFavorites'));
  if (storedFavorites) {
    storedFavorites.forEach(favorite => {
      console.log(favorite);
    });
  }
}

