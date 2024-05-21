// if
// const isUserloggedIn = true
// const temprature = 39

// if ( temprature === 40 ) {
//     console.log("less than 45");
// } else {
// console.log("temprature is greater than 45");
// }
// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 2000

// // if (balance > 500) console.log("test"), console.log("test2");
// if (balance < 600) {
//     console.log("less than 500");
// }else if (balance < 800) {
//     console.log("less than 800");

// }else {
//     console.log("less than 1500");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==4) {
    console.log("Allow to buy ticket");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}