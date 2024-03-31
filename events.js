// let myBtn = document.getElementById("btn");
// myBtn.onclick = function (){
//     console.log("Clicked")
// };

// on mouse enter
// on mouse leave
// on context menu
// on load
// on scroll
// on resize

// form events
// onfocus
// onblur
// onsubmit

// window.onscroll = function () {
//     console.log("Scroll");
// }

// validate form and prevent default

// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")



// document.forms[0].onsubmit = function (e){
// let userValid = false;
// let ageValid = false;

// if (userInput.value !== "" && userInput.value.length <= 10){
//     userValid = true;
// }
// if (ageInput.value !== ""){
//     ageValid = true;
// }

// if (userValid === false || ageValid === flase){
//     e.preventDefault();
// }
// };

// document.links[0].onclick = function (e) {
//      console.log(e);
//      e.preventDefault();
// }



// events simulation
// click
// focus
// blur

// let two = document.querySelector(".two");
// let one = document.querySelector(".one");

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function (){
//     document.links[0].click();
// }


/* class list object 
class list
length
contains
item(index)
add
remove
toggle
*/
 
// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//     element.classList.add("add-one", "add-tow");

//     element.classList.remove("add-one", "add-tow");

//     element.classList.toggle("osama");
// }



/* 
style
cssText
removeProperty(propertyName) [Inline, Stylesheet]
setProperty(propertyName, value, priorty)
*/

// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "Bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// console.log(document.styleSheets[0].rules[0].style.removeProperty("line-height"));
// console.log(document.styleSheets[0].rules[0].style.setProperty("background-color","red"));


/*
before
after
prepend
append
remove
*/

// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");
// // element.before("Hello from JS");
// // element.after(createdP);
// // element.prepend("Hello From JS");
// // element.append(createdP);

// element.remove();



// DOM Traversing
// next sibling
// previossibling
// nextElementSibling
// previosElementsibling
// parentElement

// let span = document.querySelector(".tow");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// console.log(span.parentElement);

// span.onclick = function (){
//     span.parentElement.style.opacity = "0"; // or remove;
// }

// DOM cloning
// cloneNode(Deep)

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;
// myDiv.appendChild(myP);


// add Events listener
// use without on 
// attach multiple Events
// Error Test

// search
// caputure & bubbling JS
// removeEventListener

let myP = document.querySelector("p");
// myP.onclick = one;

// myP.onclick = tow;

// function one (){
//     console.log("Message from onClick 1");
// }
// function tow (){
//     console.log("Message from onClick 2");
// }

// myP.addEventListener("click", function(){
//     console.log("Message from OnClick 1 Event");
// });

// myP.addEventListener("click", one);
myP.onclick = function(){
    let newP = myP.cloneNode(true);
    newP.className = "cloned";
    document.body.appendChild(newP);
};

// let cloned = document.querySelector(".cloned"); // error
// cloned.onclick = function(){
//     console.log("I am cloned");
// };

document.addEventListener("click",function(e){
    if (e.target.className === 'cloned'){
        console.log("I'm cloned");
    }
});