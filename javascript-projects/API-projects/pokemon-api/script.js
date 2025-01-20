// This code written by learning from Youtube: https://youtu.be/37vxWr0WgQk?si=J83_yNBsP3_EWNQ0

// Code using fetch and .then .catch

//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// .then((response) => {

//   if (!response.ok) {
//     throw new Error('Could not fetch response');
//  }
//  return response.json();
//})
// .then((data) => console.log(data.name))
// .catch((error) => console.error(error));


// Same code using Async (but connected to Html from here on):

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById('pokemonName')
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSprite');

    imgElement.src = pokemonSprite;
    imgElement.style.display = 'block';
  } 
  catch (error) {
    console.error(error);
  }
}

// Calling the data:
fetchData();
