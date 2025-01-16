const searchInput = document.getElementById('searchInput');
const moviesContainer = document.getElementById('moviesContainer');
let debounceTimer;

// pasiredaguojame kad si funkcija priimtu argumentus:
const fetchMovies = async (query = '') => {
  const api = 'https://api.tvmaze.com/shows';
  // paredaguojame pati api linka, kad priimtu query:
  const searchApi = `https://api.tvmaze.com/search/shows?q=${query}`;
  const url = query ? searchApi : api;

  // galim naudot TRY CATCH bloka, nes tai yra ASYNC funkcija:
  try {
    // cia panaudojam ternary operator, kad jei yra query, tada naudok search API, o kitu atveju iprasta API:
    const response = await fetch(url);
    const data = await response.json();
    //kai duomenys atvaziuoja, iskvieciame funkcija:
    displayMovies(query ? data : data.map((show) => ({ show })));
  } catch (error) {
    console.error(error);
  }
};

const displayMovies = (movies) => {
  // pirma, isvalome html nuo praeito query results:
  moviesContainer.innerHTML = '';

  // jei nera filmu, isvedame pranesima:
  if (!movies.length) {
    moviesContainer.innerHTML = '<p>Nerasta filmu.</p>';
    return;
  }

  // kiekvienam filmui praleisime cikla:
  movies.forEach((item) => {
    const movie = item.show;
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `<img src="${
      movie.image ? movie.image.medium : ''
    }" alt="filmo nuotrauka">
    <h3>${movie.name}</h3>
    <p>Rating: ${movie.rating.average}</p>
    <p>Genres: ${movie.genres.join(', ')}</p>
    `;

    // kiekviena filma prides prie filmu saraso:
    moviesContainer.appendChild(movieCard);
  });
};

// klausom input, kol bus ivesti duomenys:
// DEBOUNCE LOGIKA:
searchInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;

  // kol mes rasome i input:
  clearTimeout(debounceTimer);

  // paleidzia async funkcija, kuri ivyks po 0.5 sekundes:
  debounceTimer = setTimeout(() => {
    if (inputValue) {
      fetchMovies(inputValue);
    } else {
      fetchMovies();
    }
  }, 500);
});

fetchMovies();
