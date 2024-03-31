// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// 11 + 20 + 80 - 11 =100 //b =21 c=81 a=12
// console.log(++a + -b + +c++ - -a++ + +a);
// 13 - 21 + 81 + 13 + 14 //a=14 b = 21 c=82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// 81 + 21 + 13*21 - 22*13 + 12 -1

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(2*(-d++*3 + +e++*f + -d + +true));
console.log(+e*2 + ++f + -d + +true )