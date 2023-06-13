import { JSDOM } from 'jsdom';


const dom = new JSDOM('./index.html');

const saveToFavorites = () => {
  const currentFactIndex = Math.floor(Math.random() * facts.length);
  const currentFact = facts[currentFactIndex];
  favorites.push(currentFact);
  console.log("Frase guardada en favoritos:", currentFact);
};

document.getElementById('favorite').addEventListener('click', () => {
  saveToFavorites();
});
  