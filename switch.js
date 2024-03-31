// let day = 6;

// switch (day){
//     case 0 :
//         console.log("Saturday");
//         break;
//     case 1 :
//         console.log("Sunday");
//         break;
//     case 2 :
//         console.log("Monday");
//         break;
//     case 3 :
//     console.log("Thursday");
//         break;
//         default :
//         console.log("Unkown")

// }

let job = "eng"
let Salary = 0;

switch(job) {
    case "Manager" :
        Salary = 8000;
        break;
    case "IT" :
    case "Support" :
        Salary = 6000;
        break;
    case "Developer" :
    case "Designer" :
        Salary = 7000;
        break;
    default:
        Salary = 4000;
}
console.log(job,Salary);