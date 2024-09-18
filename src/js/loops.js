const elements = ["😎", "😫", "😆", "🇺🇸"];

let myNumber = 13 ;

for (let i = 0; i < elements.length; i++) {
  myNumber = myNumber * (i+1)
console.log(`index: ${i} Emoji: ${elements[i]}`)
}

let number = 0;

let n = 3;

do {
	n = n + 3;
} while (n < 9);

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

for (property in deathStar) {
}
