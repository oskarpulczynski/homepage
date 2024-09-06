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
