// function showInfo(user = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills){
//     document.write(`<div>`);
//     document.write(`<h2>Welcome ${user}</h2>`)
//     document.write(`<p>Age ${age}</p>`);
//     document.write(`<p>Hour Rate: $${rate}</p>`);
//     if(show === "Yes"){
//         if(skills.length > 0){
//             document.write(`<p>${skills.join(" | ")}</p>`)
//         } else {
//             document.write(`<p>Skills: No Skills</p>`)
//         }
//     } else {
//             document.write(`<p>Skills Is Hidden</p>`)
//     }


//     document.write(`</div>`);

// }

// showInfo("Ali", 30, 20,"No", "HTML","CSS");

// Anonymous function 


// functions can be called before it's declared
// function calc(num1,num2){
//     return num1+num2;
// }

// function will be created on run time by the excution...
// anonymous func don't have name
// we use it like when we use actions
// like buttons when clicked
// we don't need to name the function,
// higher order function
// the argument will be also functions

// let calculator = function (num1,num2){
//     return num1 + num2;
// ;}
// console.log(calculator(10,20));

// document.getElementById("show").onclick = function (){
//     console.log("Show");
// }

// setTimeout(function () {
//     console.log("Good");
// },2000);

// return nested function

// example 1
// function sayMessage(fName,lName){
//     let messgae = `Hello`;
//     function concatMsg(){
//         messgae = `${messgae} ${fName} ${lName}`
//     }
//     concatMsg();
//     return messgae;
// }

// console.log(sayMessage("Osama","Mohamed"));

// example 2
// function sayMessage(fName,lName){
//     let messgae = `Hello`;
//     function concatMsg(){
//         function getFullName(){
//             return `${fName} ${lName}`;
//         }
//         return `${messgae} ${getFullName()}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessage("Osama","Mohamed"));

// Arrow function syntax
// have no parameters and no return

// let print = () => 10; // on line no need for {}
// let print2 = () => { // we can use _ instead of ()
//     console.log("Hi");
//     console.log("Common Just Do It");
// }

// let print = (num) => num;
// console.log(print(100));

// let plus = (num1,num2) => num1+num2;
// console.log(plus(100,200));

// scope - global and local
// for protection

// var a = 1; // global
// let b = 2; // global

// function showText () {
//     console.log(a); // from glabal
// }
// showText();

// function showTextPrivate () {
//     let a = 100;
//     console.log(a); // from glabal
// }
// showTextPrivate();
// console.log(a); // reults an error a is private for the function

// scope block

// var x = 10;
// if (10 === 10){
//     var x = 50; 
// }
// console.log(x); // var is not block scope
// // so the results will be 50 
// // for that we use let which is block scoped
// var x = 10;
// if (10 === 10){
//     let x = 50; // if not defined global will be outputed
// }
// console.log(x);

// scope: lexical scope

function parent(){
    let a = 10;
    function child(){
        console.log(a);
        function grand(){
            let b = 100;
            console.log(b);
        }
        grand();
    }
    child();
}
parent();