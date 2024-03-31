// let myfriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan","Ali"]];
// console.log(`Hello ${myfriends[0]}`);
// console.log(`${myfriends[1][2]}`)

// console.log(`Hello ${myfriends[3][1]}`)
// console.log(`Hello ${myfriends[3][1][1]}`)

// console.log(myfriends)
// myfriends[1] = "Gamal"
// console.log(myfriends)

// console.log(myfriends.length);
// myfriends[3] = "Gamal";
// console.log(myfriends);

// Add & Remove from array

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Ali"]
// console.log(myFriends);
// //unshift add element at the start of the array
// myFriends.unshift("Osama");
// console.log(myFriends);
// // push add element at the end of the array
// myFriends.push("Nabil")
// console.log(myFriends);

// // remove element from the array
// //shift delete element from the start of the array and return it
// myFriends.shift();
// console.log(myFriends);

// // pop delete last element in the array and return it
// myFriends.pop();
// console.log(myFriends);

// array methods [search]
// indexOf

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Ali", "Ahmed"];
// console.log(myFriends)
// // console.log(myFriends.indexOf("Ahmed",2));

// // // lastIndexOf start from the end
// // console.log(myFriends.lastIndexOf("Ahmed"));
// // console.log(myFriends.lastIndexOf("Ahmed",-2));

// // includes true or false 
// console.log(myFriends.includes("Ahmed"));
// console.log(myFriends.includes("Ahmed",2));

// if (myFriends.indexOf("Osama") === -1) {
//      console.log("Not found");
// }

// Sorting arrays
// sort(function [opt])
// reverse

// let myFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];
// console.log(myFriends);
// console.log(myFriends.sort());
// console.log(myFriends.reverse());

// Slicing arrays

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice(1,3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1,-2));
// console.log(myFriends.slice(-4,-1));
// console.log(myFriends);

// splice add or remove 

// myFriends.splice(0,0,"Samer");
// console.log(myFriends);

// myFriends.splice(1,2,"Samer");
// console.log(myFriends);

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal"];
let myNewFriends = ["Sameer", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends);
console.log(allFriends);
allFriends = myFriends.concat(myNewFriends,schoolFriends);
console.log(allFriends);

// join

console.log(allFriends.join()); // if empty defualt is ,
console.log(allFriends.join('@ '));


