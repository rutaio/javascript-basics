const receptai = [
  {
    Vištiena: 100,
    Brokoliai: 200,
    Pomidorai: 100,
    Salotos: 150,
    Druska: 20,
    Aliejus: 15,
    Citrina: 1,
  },
  {
    Miltai: 250,
    Kiaušiniai: 1,
    Mėlynės: 100,
    Cukrus: 50,
  },
  {
    Mėsa: 300,
    Makaronai: 700,
    Sūris: 200,
    Druska: 20,
    Grietinė: 100,
  },
];

// 1. Uzduotis: Pasirenkame recepta paspausdami ant jo - JS zino, ka pasirinkau ir atsiranda check ikona ant to recepto.

let activeRecipe = null;
let amount = 1;

// funkcija, kuri paslepia visus svg:
function hideAll() {
  document.getElementById('svg1').classList.add('hide');
  document.getElementById('svg2').classList.add('hide');
  document.getElementById('svg3').classList.add('hide');
}

// susitvarkiau, kad rodytu zalia ikonos checkmark:
document.getElementById('1').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg1').classList.remove('hide');
  activeRecipe = 0;
  displayRecipe(activeRecipe);
});

document.getElementById('2').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg2').classList.remove('hide');
  activeRecipe = 1;
  displayRecipe(activeRecipe);
});

document.getElementById('3').addEventListener('click', () => {
  hideAll();
  document.getElementById('svg3').classList.remove('hide');
  activeRecipe = 2;
  displayRecipe(activeRecipe);
});

// 3. Kai paspaudziu "pateikti" mygtuka, html rodo apskaiciavimus, kiek reikes ingredientu pagal pasirinktas porcijas.

function updateRecipeAmount() {
  // SVARBU - is input istraukta reiksme visada yra STRING
  // todel naudojame funkcija - parseInt arba Number - kad paverst string i number:
  // o funkcijas rasome skliaustuose:
  const portionQuantity = parseInt(
    document.getElementById('portionInput').value
  );

  // dabar reikia pakeisti let amount reiksme:
  amount = portionQuantity;

  // reikia iskviesti funkcija:
  displayRecipe(activeRecipe);
}

// 2. Uzduotis: Kai paspaudziu ant recepto, html atvaizduoja paspausto recepto sudeti.

function displayRecipe(recipe) {
  let displayString = '';

  // ciklas eis per kiekviena masyvo objekta (visus receptus):
  for (let item in receptai[recipe]) {
    const itemAmount = receptai[recipe][item];
    displayString += `${item}: <strong>${
      // kiekviena recepto key reiksme gauna po strong taga
      itemAmount * amount // galim pasitiktinti ar info yra number ar string su console.log(typeof receptai[recipe][item]); // number
    }</strong><br>`;
  }

  document.getElementById('displayScreen').innerHTML = displayString;
}
