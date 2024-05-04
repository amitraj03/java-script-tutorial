// const tinderUser = new Object() // single term object

const tinderUser = {}  // double term object

tinderUser.id = "456abc"
tinderUser.name = "Rammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "many@gmail.com",
    fullname: {
        userfullname: {
            firstname: "amit",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }, 
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "699",
    courseInstructor: "amit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({comapny}) => {

// }

// navbar(comapny = "amit") // This is called Destrctruing

// {
//     "name": "amit",
//     "coursename": "js in hindi",
//     "price": "free"
// } // This is called JSON API

[
    {},
    {},
    {}
]