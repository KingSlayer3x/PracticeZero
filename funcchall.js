function showDetails(a, b, c){
    let name, age, status;
    typeof a === "string" 
    ? name = a 
    : typeof b === "string"
    ? name = b
    : typeof c === "string"
    ? name = c
    : name = "Unknown";
    
    typeof a === "number" 
    ? age = a 
    : typeof b === "number"
    ? age = b
    : typeof c === "number"
    ? age = c
    : age = "Unknown";

    typeof a === "boolean" 
    ? status = a 
    : typeof b === "boolean"
    ? status = b
    : typeof c === "boolean"
    ? status = c
    : status = "Unknown";

    status === true
    ? result = "You Are Available For Hire"
    : result = "You Are Not Available For Hire";

    console.log(`Hello ${name}, Your Age Is ${age}, ${result}`)
}

showDetails("Ali", true, 30);
showDetails(31, "Ali", true);
showDetails(true, 32, "Ali");
showDetails(false, "Ali", 33);