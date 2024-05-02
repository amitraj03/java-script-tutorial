const name = "amit"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('amitg-ta-com')

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));

const newString = gameName.substring (0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 2)
console.log(anotherString);

const newStringOne = "   amit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://amit.com/amit%40gupta"

console.log(url.replace('%40', '-'))

console.log(url.includes('raghav'))

console.log(gameName.split(' '));