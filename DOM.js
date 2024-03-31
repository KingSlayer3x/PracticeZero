// DOM: Document Object Model

// let myIdElement = document.getElementById("my-div");
// let myTagElement = document.getElementsByTagName("p");
// console.log(myIdElement);
// console.log(myTagElement[1]);
// // console.log(myTagElement[1].innerHTML = "Text");

// let myQueryElement = document.getElementsByClassName("my-span")
// // console.log(myClassElement[1]);

// // console.log(document.body.appendChild)
// console.log(document.forms[0]);
// console.log(document.links[1].href);

// dom get and set 

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text Form <span>Main JS</span> File"; // change content
// myElement.textContent = "Text Form <span>Main JS</span> File"; // text

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// document.images[0].title = "Picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";

// let myLink = document.querySelector(".link")

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("href", "https://twitter.com")
// myLink.setAttribute("title", "Twittre");

/* attributes and examples
element  attributes
element has attribute
element has attributes
element removeattributes
*/

// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")){
//     if(myP.getAttribute("data-src") === ""){
//         myP.removeAttribute("data-src");
//     } else {
//         myP.setAttribute("data-src", "New Value")
//     }
// } else {
//     console.log("Not Found");
// }

// if (myP.hasAttributes()){
//     console.log("has attributes")
// }
// if (document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log("has attributes")
// } else {
//     console.log(`Has no attributes`)
// }

// create and append child

let myElement = document.createElement("div");
myElement.className = "product";
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is a DIV");
myElement.setAttributeNode(myAttr); // can be changed in future
myElement.setAttribute("data-test", "Testing");

// append text to element

myElement.appendChild(myText);
// append comment to element

myElement.appendChild(myComment);
// append element to body

document.body.appendChild(myElement);
console.log(myElement);

// practice create element

// let myElement = document.createElement("div");
// myElement.className = "product";
// let myH3 = document.createElement("h3");
// let hText = document.createTextNode("sdgsdgfg");
// myH3.appendChild(hText);
// let myPara = document.createElement("p");
// let pText = document.createTextNode("sdkjgnkdsfnlkwnslksdfaskjgnasdjf");
// myPara.appendChild(pText);

// myElement.appendChild(myH3);
// myElement.appendChild(myPara);

// document.body.appendChild(myElement);



// dealing with childrens

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.childNodes);
// console.log(myElement.firstChild);
// console.log(myElement.lastChild);
// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);