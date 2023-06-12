
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