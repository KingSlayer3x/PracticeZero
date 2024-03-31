// let a = 50;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a<= 40) {
//     console.log("10 to 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown")
// }

// condition ? if True : if false

// a < 10 ? console.log(10)
// : a >= 10 && a<= 40 ? console.log("10 to 40")
// : a > 40 ? console.log("> 40")
// : console.log("Wrong input");

// let st = "Elzero Web School";

// if (typeof(st) === typeof("34")) {
//     console.log("Good");
// }

// if (st.substr(st.indexOf("W"),1).toLowerCase() === "w") {
//     console.log("Good");
// }

// if (st !== "string") {
//     console.log("Good");
// }

// console.log(typeof(st.length));

// if (typeof(st.length) === "number") {
//     console.log("Good");
// }

// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");

// Given variables
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for(let i=0;i<dishData.length;i++){
//         let finalPrice;
//         if (taxBoolean === true){
//             finalPrice = dishData[i].price * tax;
//         }
//         else if (taxBoolean === false){
//             finalPrice = dishData[i].price;
//         }
//         else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             return;
//         }
//         console.log(`Dish: ${dishData[i].name} price: ${finalPrice} `)
//     }

// }
// getPrices(true);

// Given variables
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for(let i=0;i<dishData.length;i++){
//         let finalPrice;
//         if (taxBoolean === true){
//             finalPrice = dishData[i].price * tax;
//         }
//         else if (taxBoolean === false){
//             finalPrice = dishData[i].price;
//         }
//         else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             return;
//         }
//         console.log(`Dish: ${dishData[i].name} price: $${finalPrice} `)
//     }

// }

// // Implement getDiscount()

// Given variables
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for (let dish of dishData) {
//         let finalPrice;

//         if (taxBoolean === true) {
//             finalPrice = dish.price * tax;
//         } else if (taxBoolean === false) {
//             finalPrice = dish.price;
//         } else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             return;
//         };

//         console.log(`Dish: ${dish.name} Price: $${finalPrice}`)
//     };   
// };

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//     getPrices(taxBoolean);

//     let conditionOne = typeof(guests) === "number";
//     let conditionTwo = guests > 0 && guests < 30;
        
//     if (conditionOne === true && conditionTwo === true) {
//         let discount = 0;
//         if (guests < 5) {
//             discount = 5;
//         } else if (guests >= 5) {
//             discount = 10;
//         }
//         console.log(`Discount is: $${discount}`);
//         } else {
//             console.log('The second argument must be a number between 0 and 30');
//         }
// };
// typeof
// // Call getDiscount()
// getDiscount(true, 2);
// getDiscount(false, 10);
// getDiscount("tt",5);
// getDiscount("tt",50);
// console.log(result);
// var result = 7;


// var veggies = []
// veggies.push('parsley')
// veggies.push('carrot')
// console.log(veggies[2])