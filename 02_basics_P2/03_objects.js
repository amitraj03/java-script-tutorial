// singleton 

// object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Amit",
    "full name": "Amit gupta",
    [mySym]: "mykey1",
    age: 24,
    location: "Motihari",
    email: "amit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondahy", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "amit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "amit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());