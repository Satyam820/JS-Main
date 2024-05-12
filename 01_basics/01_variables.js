const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"    //we can declare variable by this method also where nor let or var is used
let accountState;         // In JS if we are not definning any value of variable it will show undefined

// accountId = 2 // not allowed

accountEmail = "hca@gmail.com"
accountPassword = "21212"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
Bcz of issue in scope and functional issue
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])