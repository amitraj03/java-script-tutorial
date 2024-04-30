const accountId = 155241
let accountEmail = "amit@google.com"
var accountPassword = "12345"
accountCity = "Motihari"
let accountState; 

// accountId = 2 // not allowed




accountEmail = "bac@google.com"
accountPassword = "58585858"
accountCity = "Bhopal"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])