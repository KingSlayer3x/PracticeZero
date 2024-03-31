// console.log(this);
// console.log(this === window); // on browser gives true

// myVar = 100;
// console.log(window.myVar); // on browser gives 100
// console.log(this.myVar);

// function sayHello(){
//     console.log(this);
// }
// sayHello();


// document.getElementById("cl").onclick = function (){
//     console.log(this);
// };

// let user = {
//     age: 30,
//     ageInDays: function () {
//         return this.age * 2;
//     },
// };

// console.log(user.age);
// console.log(user.ageInDays());

// search Strict mode

// create object with create method

// let obj = Object.create({});
// obj.a = 100;
// console.log(obj);

// let copyObj = Object.create(user);
// copyObj.age = 33;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.ageInDays());

// create object with assign method 

let obj1 = {
    prop1: 1,
    meth1: function(){
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function(){
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1,obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;
console.log(finalObject);

let newObject = Object.assign({},obj1,{prop5: 5, prop6: 6})

console.log(newObject);