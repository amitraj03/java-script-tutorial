// Primitive

// 7 types : String, Number, Boolean, null,  undefined, Symbol, BigInt

const score =  100
const scoreValue =  100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 5156645465151n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "hanuman", "doga"];
let myObj = {
    name: "amit",
    age: 23, 
}


const myFunction = function(){
    console.log("Hello Duniya");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "amitguptadotcom"

let anothername = myYoutubename
anothername = "chaipecharchawithamit"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "amit@google.com"

console.log(userOne.email);
console.log(userTwo.email);