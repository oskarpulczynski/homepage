const firstName = "Oskar";
const age = 26;

console.log(firstName);
console.log(age);

const header = document.querySelector(".page-header__heading--js");

console.log(header.innerHTML);

header.innerHTML = `Hello World! Nazywam się ${firstName}, mam ${age} lat i zmarnowałem ${age} lat życia`;

console.log(header.innerHTML);

const hiddenText = document.querySelector(".page-header__text--js");

hiddenText.innerHTML = "Ten tekst widzisz tylko dzięki JS ;)";

function calculate(myNumber){
  myNumber = myNumber +3;
  console.log(myNumber);
  return myNumber*7;
};

calculate(1);

const result = calculate(1);
console.log(result);

function hello() {
  console.log('hello');
};

hello();

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed 💥`)
  },
  isOperating: true,
  levels: 357,
  name: 'Death Star',
  population: 10000,
  commander: {
    name: 'Darth Vader',
    age: 35,
  },
};

console.log(deathStar);
console.log(deathStar.diameter);
console.log(deathStar.name);
console.log(`Imię i Nazwisko: ${deathStar.commander.name} Wiek: ${deathStar.commander.age}`);

deathStar.fire('Ziemia');