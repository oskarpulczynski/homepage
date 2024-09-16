const humanOne = {
	name: "Maciek",
	age: 32,
	address: {
		street: "Warszawska",
		city: "Białystok",
	},
};

const humanTwo = {
	name: "Stefa",
	age: humanOne.age,
	address: {
		street: humanOne.address.street,
		city: "Białystok",
	},
};

console.log(humanOne);
console.log(humanTwo);

humanOne.age = 35;

console.log(humanOne);
console.log(humanTwo);

humanOne.address.street = "Lipowa";

console.log(humanOne);
console.log(humanTwo);
