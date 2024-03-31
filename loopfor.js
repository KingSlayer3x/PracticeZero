// Looping
// loop on sequences

// let myFriends = [1, 2, 3, "Osama", "Ahmed", "Sayed", "ALi", "Amira"];
// let onlyNames = [];
// for (let i = 0; i < myFriends.length; i++) {
//     // console.log(myFriends[i]);
//     if (typeof myFriends[i] === "string"){
//         onlyNames.push(myFriends[i]);
//     }
// }
// console.log(onlyNames)

// Nested loop 

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "Black"];
// let models = [2020, 2021];

// for (let i=0;i<products.length;i++){
//     console.log("-".repeat(7));
//     console.log(products[i]);
//     console.log("-".repeat(7));
//     for ( let j=0;j<colors.length;j++){
//         console.log(colors[j]);
//     }
//     for ( let k=0;k<models.length;k++){
//         console.log(models[k]);
//     }
// }

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "green", "Black"];
// let models = [2020, 2021];

// for (let i=0;i<products.length;i++){
//     console.log(products[i]);
//     if (products[i] === "Pen"){
//         break;
//     }
// }

// let products = ["keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];
// mainloop: for (let i=0;i<products.length;i++){
//     if (typeof products[i] === "number"){
//         continue;
//     }
//     console.log(products[i]);
//     nestedloop: for (let j=0;j<colors.length;j++){
//         console.log(`- ${colors[j]}`);
//         if(colors[j] === "Green"){
//             break nestedloop;
//         }
//     }

// }

// loop advanced example

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let i = 0;

// for (;;){
//     console.log(products[i]);
//     i++;
//     if(i === products.length) break;
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Black"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} products</h1>`);
// for (let i = 0;i<showCount;i++){
//     document.write(`<div>`);
//     document.write(`<h3>[${i+1}] ${products[i]}</h3>`)
//     for (let j =0;j<colors.length;j++){
//         document.write(`<p>${colors[j]}</p>`)
//     }
//     document.write(`</div>`)
// }

// while loop

