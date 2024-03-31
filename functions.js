// function sayHello(userName){
//     console.log(`Hello ${userName}`);
// }
// sayHello("Ali");

// function generateYears(start, end, exclude){
//     for(let i=start;i<=end;i++){
//         if(i === exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(1994,2024,2011);

// function calc(num1, num2){
//     return num1+num2;
// }
// let result = calc(10,10);
// console.log(result);

// function sayHello(userName, age = "Unknown"){
//     // if ( age === undefined){
//     //     age = "Unknown";
//     // }

//     // age = age || "Unknown"
//     return `Hello ${userName} Your Age Is ${age}`
// }
// console.log(sayHello("Osama"));


// many arguments > rest parameters :
// function calc(...numbers){
//     // console.log(Array.isArray(numbers));
//     let result = 0;
//     for (let i=0;i<numbers.length;i++){
//         // console.log(numbers[i]);
//     result += numbers[i];
//     }
//     return `Final result is ${result}`
// }
// console.log(calc(12,12,12,13));

// 
function showInfo(us = "UnK", age = "Unk", rt = "0",show = "yes", ...sk){
    document.write(`<div>`);
    document.write(`<h2>Welcome ${us}</h2>`);
    document.write(`<p>Age: ${age}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "yes"){
        if(sk.length > 0){
        document.write(`<p>${sk.join(" | ")}</p>`);
        } else{
            document.write(`<p>Skills: No Skills</p>`)
        }
    } else {
        document.write(`<p>Skills is hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo("Osama", 38, 20, "yes", "HTML", "CSS");