// Primitive  (call by value)     (kis tarike se memory me data ko rakha jata hai aur access kiya jata hai) //others are non-primitive or refrence

// 7 tyoes : string, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;     //undefined

//console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail])

const id = Symbol('123')
const anotherId = Symbol('123')     // symbol ka kaam hai ki wo same value ko bhi alag identify karta hai

// console.log(id === anotherId);

const bigNumber = 23425656345245546895376859n    //n so it become bigint



// Reference type (Non Primitive)                      //Return datatype = function
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]      //Array ko hum [] me hi likhte hai

let myObj = {                                        //whatsoover contain in {} is object
    name: "Satyam",
    age: 26,
}

const myFunction = function (){                    //Function ka return datatype object function
    console.log("Hello world");
}


// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++   Memory   +++++++++++++++++++++++++++++++++++++++++++++++

//Stack  (Primitive), Heap (Non-Primitive)


let myYoutubename = "hiteshchaudhary.com"         //Copy image so it will not going to change

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {                                    //Reference means actual value
    email: "user@goofle.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


