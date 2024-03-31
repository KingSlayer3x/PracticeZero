let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
.split("")
.map(function(ele){
   return isNaN(parseInt(ele)) ? ele : "";
}).map(function(ele){
   return !ele.startsWith("_") ? ele : " ";
})
.filter(function(ele){
   return !ele.startsWith(",");
}).filter(function(ele){
   return !ele.startsWith("Z");
}).reduce(function(acc,current){
   return `${acc}${current}`;
}).slice(1)
console.log(solution);
