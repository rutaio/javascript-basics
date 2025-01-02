/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function convertEurosToDollars() {
  // rasau +1, kad generuotu skaicius nuo 1, o ne 0:
  let randomNumberInEuros = Math.floor(Math.random() * 1000) + 1;

  // dauginu is exchange rate:
  let randomNumberInDollars = randomNumberInEuros * 1.0426;

  // suapvalinu:
  console.log(`$${randomNumberInDollars.toFixed()}`);
}

convertEurosToDollars();

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

function convertDollarsToEuros() {
  let randomNumInDollars = Math.floor(Math.random() * 1000) + 1;

  // dauginu is exchange rate:
  let randomNumInEuros = randomNumInDollars * 0.95765;

  console.log(`€${randomNumInEuros.toFixed()}`);
}

convertDollarsToEuros();

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function calculateBodyMassIndex(svoris, ugis) {
  let bodyMassIndex = svoris / ugis ** 2;

  if (bodyMassIndex < 18.5) {
    return 'Per mažas svoris';
  } else if (bodyMassIndex >= 18.5 && bodyMassIndex < 24.9) {
    return 'Normalu';
  } else;
  return 'Viršsvoris';
}

console.log(calculateBodyMassIndex(165, 1.75)); // tikrinu su duomenimis ar funkcija teisinga

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function convertAge(ageInYears) {
  ageInDays = ageInYears * 365; // nes metuose yra 365 dienos
  ageInHours = ageInDays * 24; // nes dienoje yra 24 valandos
  ageInMinutes = ageInHours * 60;
  ageInSeconds = ageInMinutes * 60;

  console.log(
    `Jei žmogaus amžius metais yra ${ageInYears}, tai jis jau gyvena: ${ageInDays} dienas, ${ageInHours} valandas, ${ageInMinutes} minutes ir ${ageInSeconds} sekundes`
  );
}

convertAge(37); // iskvieciu funkcija irasydama duomenis

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

// iš Farenheito į Celsijų:
function convertCtoF(temperatureInCelsius) {
  // formule:
  temperatureInFahrenheit = (9 / 5) * temperatureInCelsius + 32;
  return temperatureInFahrenheit;
}

convertCtoF(20); // iskvieciu funkcija irasydama duomenis

console.log(`Temperatūra yra lygi ${temperatureInFahrenheit}°F`);

// atvirkščiai:
function convertFtoC(temperatureInFahrenheit) {
  temperatureInCelsius = ((temperatureInFahrenheit - 32) * 5) / 9;
  return temperatureInCelsius;
}

convertFtoC(68);

console.log(`Temperatūra yra lygi ${temperatureInCelsius}°C`);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printNumbersWithMinus() {
  let oneLine = '';
  let x = 0;

  while (x < numbers.length - 1) {
    // po masyvo nariu pridek po bruksneli:
    oneLine += numbers[x] + '-';
    x++;
  }

  // is eilutes, kuri buvo sukurta su WHILE, atimk paskutini simboli:
  oneLine += numbers[numbers.length - 1];

  // iskvietus funkcija, parodyk sukurta eilute:
  console.log(oneLine);
}

// iskvieciu funkcija:
printNumbersWithMinus();

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

// bus kuriamos penkios eilutes:
let starsLines = 5;

// ciklas, kad sukurti eilutes:
for (let i = 1; i <= starsLines; i++) {
  // tuscias stringas, kuriame bus rodomas * paveikslelis:
  let starsShowcase = '';
  // ciklas, kuris sukuria *:
  for (let j = 1; j <= i; j++) {
    // prideda *:
    starsShowcase += '*';
  }
  console.log(starsShowcase);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

// siandienos data:
let currentDate = new Date();

// sukurk Kaledu data:
let christmasDate = new Date(currentDate.getFullYear(), 11, 25);

// tikrinu ar siandienos data yra po Kaledu:
if (currentDate.getMonth() == 11 && currentDate.getDate() > 25) {
  // jei taip, pridek vienus metus:
  christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}

// dienos nuo dabar iki Kaledu:
let dayMilliseconds = 1000 * 60 * 60 * 24;
let daysLeft = Math.ceil(
  (christmasDate.getTime() - currentDate.getTime()) / dayMilliseconds
);

// parodyk dienu skaiciu iki Kaledu:
console.log(`Liko ${daysLeft} dienų iki Kalėdų!`);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let names = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];

// rezultatas su kableliu:
function showcaseNamesWithComma() {
  let namesWithComma = '';

  // ciklas eina per visus masyvo narius:
  for (let i = 0; i < names.length - 1; i++) {
    // atskiria masyvo narius su kableliu:
    namesWithComma += names[i] + ',';
  }

  // kai jau yra sukurta eilute su duomenimis, atimk paskutini simboli, kuris siuo atveju yra kablelis:
  namesWithComma += names[names.length - 1];

  // parodyk sukurta rezultata, kai bus iskviesta funkcija:
  console.log(namesWithComma);
}

// iskvieciu funkcija:
showcaseNamesWithComma();

// o dabar rezultatas su pliusu:
function showcaseNamesWithPlus() {
  let namesWithPlus = '';

  for (let j = 0; j < names.length - 1; j++) {
    namesWithPlus += names[j] + '+';
  }

  namesWithPlus += names[names.length - 1];

  console.log(namesWithPlus);
}

showcaseNamesWithPlus();

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

function createPassword() {
  let pwd = '';
  let pwdRequirements =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?/<>:"{}[],.`~';
  let pwdLength = 12;

  // ciklas:
  for (let i = 0; i <= pwdLength; i++) {
    // kuriu atsitiktini skaiciu:
    let randomCombination = Math.floor(Math.random() * pwdRequirements.length);
    // slaptazodis:
    pwd += pwdRequirements.substring(randomCombination, randomCombination + 1);
  }
  return pwd;
}

// iskvieciu funkcija kuri kiekviena karta parodo vis kitoki slaptazodi:
console.log(createPassword());
