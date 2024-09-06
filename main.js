const firstName = 'Oskar'
const age = 26

console.log(firstName);
console.log(age);
console.log(`Hello World! Nazywam się ${firstName}, mam ${age} lat i zmarnowałem ${age} lat życia`)

const header = document.querySelector('.page-header__heading--js')

console.log(header.innerHTML)

header.innerHTML = 'Hej!'

console.log(header.innerHTML)