

function showFavorites() {
    let storedFavorites = JSON.parse(localStorage.getItem('addFavorites'));
    if (storedFavorites) {
      const tbodyElement = document.getElementById('favorites-list');
  
      storedFavorites.forEach(favorite => {
        const trElement = document.createElement('tr');
        const tdElement = document.createElement('td');
        tdElement.textContent = favorite;
        tdElement.style.color = "white";
        trElement.appendChild(tdElement);
        tbodyElement.appendChild(trElement);
      });
    }
  }
  
// Llama a showFavorites después de cargar la ventana
window.addEventListener("load", showFavorites);