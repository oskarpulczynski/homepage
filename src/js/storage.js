console.log("hello storage");

const myObject = {
  name: 'Oskar',
  age: 26
}

localStorage.setItem('name', JSON.stringify(myObject))

const fromStorage = JSON.parse(localStorage.getItem("name"));

console.log(fromStorage);
