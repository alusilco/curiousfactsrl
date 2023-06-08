
fetch('GET /api/v2/facts/random')
  .then(response => response.json())
  .then(data => {
    // Manejar los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    // Manejar cualquier error de red
    console.error(error);
  });