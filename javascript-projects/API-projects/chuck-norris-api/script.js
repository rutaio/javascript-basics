// Uzduotis:
// kai paspaudi, rodo loaderi
// po to loaderis isnyksta

const loader = document.getElementById('loader');
const jokeElement = document.getElementById('joke');

function fetchJoke() {
  // keiciu loader CSS:
  loader.style.display = 'block';
  jokeElement.textContent = '';

  // pazadas pazada nueiti duomenu ir gris su atsakymu:
  fetch('https://api.chucknorris.io/jokes/random')
    // .json() yra metodas kuris pavercia response i json objekta:
    .then((response) => response.json())
    // .then() sekmes atveju grazina data:
    .then((data) => {
      // idedu gauta info i jokeElement vieta:
      jokeElement.textContent = data.value;
    })
    // .catch() grazina error:
    .catch((error) => {
      jokeElement.textContent =
        'Atsiprasome, ivyko klaida. Bandykite dar karta veliau.';
    })
    // .finally() visais atvejais paslepiu loaderi, nesvarbu ar sekminga ar ne:
    .finally(() => {
      loader.style.display = 'none';
    });
}

// paleidome sita funkcija ir kas bus tas bus, o su async mes galime kontroliuoti funkcija, t.y. mes laukiam kol ivyks await ir tik tada einam i tolesni koda..