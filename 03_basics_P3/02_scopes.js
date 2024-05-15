var c = 400
let a = 200

if (true) {
 let a = 20
 const b = 30
 var c = 100
// console.log("INNER: ", c);
}
var c  = 150;
// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username = "amit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()


if (true) {
    const username = "amit"
    if (username === "amit") {
        const website = "youtube"
        // console.log(username + website);
    }

    // console.log(website);
    
}

// console.log(username);

// +++++++++++++++++++ Interesting ++++++++++++++++++ //


function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)