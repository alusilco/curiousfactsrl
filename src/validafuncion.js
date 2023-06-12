/*VERIFICA SI SE PUEDE OBTENER UN HECHO ALEATORIO SIN SENTIDO (USELESS FACT) DE LA API*/
function fetchData = import ('fs/promises');
test('should fetch a random useless fact', () => {
 return fetch(url)
    .then(response => response.json())
    .then(data => {
      const text = data.text;
      expect(text).toBe(true);
    });
});