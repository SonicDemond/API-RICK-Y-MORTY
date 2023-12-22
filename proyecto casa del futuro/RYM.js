const baseURL = 'https://rickandmortyapi.com/api/character/';

function displayCharacters(characters) {
  const characterList = document.querySelector('.characters');
  characterList.innerHTML = '';

  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');
    characterCard.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Especie: ${character.species}</p>
    `;
    characterList.appendChild(characterCard);
  });
}

function searchCharacter() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  fetch(`${baseURL}?name=${searchTerm}`)
    .then(response => response.json())
    .then(data => displayCharacters(data.results))
    .catch(error => console.log('Error:', error));
}

fetch(baseURL)
  .then(response => response.json())
  .then(data => displayCharacters(data.results))
  .catch(error => console.log('Error:', error));
