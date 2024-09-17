import { calculate } from "./calculate";
import { differenceInDays } from "date-fns";

const firstName = "Oskar";
const age = 26;

console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector(".page-header__heading--js");

console.log(header.innerHTML);

header.innerHTML = `Hello World! Nazywam się ${firstName}, mam ${age} lat i zmarnowałem ${age} lat życia`;

console.log(header.innerHTML);

const hiddenText = document.querySelector(".page-header__text--js");

hiddenText.innerHTML = "Ten tekst widzisz tylko dzięki JS ;)";

calculate(1);

const result = calculate(1);
console.log(result);

function hello() {
	console.log("hello");
}

hello();

const deathStar = {
	diameter: 120000,
	fire: target => {
		console.log(`${target} destroyed 💥`);
	},
	isOperating: true,
	levels: 357,
	name: "Death Star",
	population: 10000,
	commander: {
		name: "Darth Vader",
		age: 35,
	},
};

console.log(deathStar);
console.log(deathStar.diameter);
console.log(deathStar.name);
console.log(
	`Imię i Nazwisko: ${deathStar.commander.name} Wiek: ${deathStar.commander.age}`
);

deathStar.fire("Ziemia");

const greet = (firstName2, age2) => {
	const result2 = `Witaj ${firstName2}! Masz ${age2} lat`;
	return result2;
};

const button = document.querySelector(".hero__button--js");

const clickFunction = e => {
	const header2 = document.querySelector(".hero__heading--js");
	header2.innerHTML = "klik, klik!";
};

button.addEventListener("click", clickFunction);

const resultDays = differenceInDays(
  new Date(),
  new Date(1998, 6, 5, 0, 0)
);

console.log(resultDays);

const wiek = resultDays/365;
console.log(wiek)