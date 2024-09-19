console.log("destrukturyzacja + spread operator");

const person = {
	name: "Oskar",
	age: 35,
};

// const { name, age } = person;

const fruits = ["apple", "orange", "strawberry"];
const vegetables = ["japko", "pomidor", "burak"];

// const [firstFruit,, secondFruit] = fruits;

// console.log(firstFruit)
// console.log(secondFruit)

const adress = {
	city: "białystok",
	country: "poland",
};

const personWithAdress = {
	// name: person.name,
	// city: adress.city,
	...adress,
	...person,
};

console.log(personWithAdress);

const fruitsandvegs = [...fruits, ...vegetables];

console.log(fruitsandvegs);

const newFruits = [...fruits];

console.log(newFruits);
