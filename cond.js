let theName = "Lama";
let theGender = "Female";
let theAge = 30;

theGender === "Male" ? console.log("Mr") : console.log("Mrs")
let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

console.log(`Hello ${result} ${theName}`);
theAge < 20
 ? console.log(20) 
 : theAge > 20 && theAge < 60  
 ? console.log("20 to 60") 
 : theAge > 60 
 ? console.log("Larger than 60") 
 : console.log("Unknown");