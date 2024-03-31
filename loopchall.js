let myAdmins = ["Ahmed", "Osama", "Sayed", "stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Anwar", "Ameer", "Omar", "Othman", "Amany", "Samia"];

if (myAdmins.includes("stop")) {
   myAdmins = myAdmins.splice(0,myAdmins.indexOf("stop"))
}

document.write(`<div> We Have X Admins </div>`)
document.write(`<div> We Have ${myAdmins.length} Admins </div>`)
document.write(`<hr>`)
let i = 0;

for(i;i<myAdmins.length;i++){
    
    document.write(`<div>`)
    document.write(`The Admin for Team ${i+1} is ${myAdmins[i]}`)
    document.write(`<h3>Team Members:</h3>`)
    let c=0;
    for(let j=0;j<myEmployees.length;j++){
        
        if(myAdmins[i][0] === myEmployees[j][0]){
        c +=1;
            document.write(`<p>- ${c} ${myEmployees[j]}</p>`)
        }
    }
    document.write(`</div>`)
    document.write(`<hr>`)    
}

// let admins = ["ahmed", "osama", "sayed", "stop", "samera"];
// let employees = ["amgad", "samah", "ameer", "omar", "othman", "amany", "samia"];
// document.write(`we have x admins`);
// admins.splice(admins.indexOf("stop"));
// document.write(`<br> we have ${admins.length} admins`);
// for (let i = 0; i < admins.length; i++) {
//   document.write(`<hr>
// the admin for team ${i + 1} is ${admins[i]}<br>
// <h2>team members:</h2>`);
//   let k = 0;
//   for (let j = 0; j < employees.length; j++) {
//     if (admins[i][0] === employees[j][0]) {
//       k += 1;
//       document.write(`<br>-${k} ${employees[j]}`);
//     }
//   }
// }