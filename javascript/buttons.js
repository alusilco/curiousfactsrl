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
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    
    // Llamar a fetchData al cargar la ventana
    window.addEventListener("load", fetchData);
    
// Agregar evento de clic a los elementos de favoritos
const dataElement = document.getElementById('data');
dataElement.addEventListener('click', function() {
  const text = dataElement.innerText;
  if (!addFavorites.includes(text)) {
    addFavorites.push(text);
    saveFavorites(); // Guardar los favoritos después de agregar el elemento
  }
});