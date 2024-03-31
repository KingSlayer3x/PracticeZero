// Higher order Function
// map work with arrays create new array

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for (let i = 0;i<myNums.length;i++){
//     newArray.push(myNums[i]+myNums[i]);
// }

// console.log(newArray);

// same with mapping

// let addSelf = myNums.map(function(element,index, arr){
//     return element + element;
//     // console.log(`Current element ${element}`)
//     // console.log(`Current index ${index}`)
//     // console.log(`Arr ${arr}`)
//     // console.log(`This ${this}`)
// },10);
// console.log(addSelf);

// let addSelf2 = myNums.map((element) => element + element);
// console.log(addSelf2);

// function addition(ele){
//     return ele + ele;
// }
// let add = myNums.map(addition);
// console.log(add);

// map practice

// let swappingCases = "elZERo"
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases.split("").map(function(ele){
//     // condition ? true : false
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");
// console.log(sw);

// let inv = invertedNumbers.map(function (elem){
//     return -elem;
// });
// console.log(inv);

// let ign = ignoreNumbers.split("").map(function (ele){
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// console.log(ign);

// let sw = swappingCases.split("")
// .map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase())
// .join("");
// console.log(sw);

// let inv = invertedNumbers.map((elem) => -elem);
// console.log(inv);

// let ign = ignoreNumbers.split("")
// .map((ele) => isNaN(parseInt(ele)) ? ele : "")
// .join("");
// console.log(ign);


// filter

// let friends = ["Ahmad", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let numbers = [11,20,2,5,17,10];

// let add = numbers.map(function(el){
//     return el+el;
// });
// console.log(add);
// // filter
// let add1 = numbers.filter(function(el){
//     return el+el;
// });
// console.log(add1); // same becuse all values get true

// let filterFriends = friends.filter(function(el){
//     return el.startsWith("A");
// });

// console.log(filterFriends);

// let evenNums = numbers.filter(function(el){
//     return el % 2 === 0 ? true : false;
// });

// console.log(evenNums);

// filter practice;

// filter words more than 4 characters
let sentence = " I Love Foood Code Too Playing Much";

let smallWords = sentence.split(" ").filter(function(ele){
    return ele.length <= 4;
}).join(" ");

console.log(smallWords);


// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers
// .split("")
// .map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "";
// })
// .join("");

// console.log(ign);

// let mix = "A13BS2ZX";

// let mixedContent = mix
// .split("")
// .filter(function (ele){
//     return !isNaN(parseInt(ele));
// }).map(function(ele){
//     return ele * ele;
// }).join("");

// console.log(mixedContent);


// reduce do function on every element in the array but reduces the element

// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function(acc, current, index, arr){
//     return acc + current;
// }, 5);
// console.log(add);

// reduce practice

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce(function(acc,current,index,arr){
//     console.log(`ACC => ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(acc.length > current.length ? acc : current);
//     console.log(`###########`);
//     return acc.length > current.length ? acc : current;
// });

// console.log(check);


// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars.filter(function(ele){
//     return !ele.startsWith("@");
// }).reduce(function(acc,current){
//     return `${acc}${current}`;
// })

// console.log(finalString);