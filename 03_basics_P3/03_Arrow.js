const user = {
    username: "Amit",
    price: 899,

    welcomeMessage: function(){
        console.log(`${this.username} , welocme to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "shyam"
// user.welcomeMessage()

// console.log(this);

// function coffe(){
//     let username = "Amit"
//     console.log(this.username);
// }

// coffe()

// const coffe = function () {
//     let username = "Amit"
//     console.log(this.username);
// }

// coffe()

// const coffe = () => {
//     let username = "Amit"
//     console.log(this);
// }

// coffe()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "amit"})


console.log(addTwo(3, 4))