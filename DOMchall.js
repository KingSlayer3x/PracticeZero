
let bodys = document.getElementsByTagName("body")[0];
bodys.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial;";

let header = document.createElement("header");
header.className = "website-head";
header.style.cssText = "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;"
// let hText = document.createTextNode("");

document.body.appendChild(header);

let mylogo = document.createElement("div");
mylogo.className = "logo";
let hText = document.createTextNode("Elzero");
mylogo.appendChild(hText);
// let logodata = document.createAttribute("title");
// let logotext = document.createTextNode("Website logo");
// mylogo.setAttributeNode(logodata);
mylogo.setAttribute("title","Website Logo");
mylogo.style.cssText = "font-weight: bold; color: rgb(35,169,110); font-size: 26px;"
header.appendChild(mylogo);

let myul = document.createElement("ul");
myul.className = "menu";
myul.style.cssText = "padding: 0px; margin: 0px; display: flex; list-style: none;";
for(let i=0;i<4;i++){
    let ulitem = document.createElement("li");
    let ultext;
    switch(i){
        case 0: ultext = document.createTextNode("Home");
        break;
        case 1: ultext = document.createTextNode("About");
        break;
        case 2: ultext = document.createTextNode("Services"); 
        break;
        case 3: ultext = document.createTextNode("Contact"); 
        break;
        default: "0";
    }
    ulitem.style.cssText = "padding: 5px; color: gray";
    ulitem.appendChild(ultext);
    myul.appendChild(ulitem);
}
header.appendChild(myul)
let mycontent = document.createElement("div");

mycontent.className = "content";
mycontent.style.cssText = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh-142px); box-sizing: border-box;"
document.body.appendChild(mycontent);

for(let i =1;i<16;i++){
let myProduct = document.createElement("div");
myProduct.className = "product";
let productText = document.createTextNode("Product");
myProduct.style.cssText = "padding: 20px; background-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px)/3);box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;"
let productspan = document.createElement("span");
productspan.style.cssText = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px";
let productspanname = document.createTextNode(`${i}`);
productspan.appendChild(productspanname);
myProduct.appendChild(productspan);
myProduct.appendChild(productText);
mycontent.appendChild(myProduct);
}

let myFooter = document.createElement("footer");
myFooter.className = "footer";
myFooter.style.cssText = "background-color: rgb(35,169,110); font-size:26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
let footerText = document.createTextNode("Copyright 2024");
myFooter.appendChild(footerText);
document.body.appendChild(myFooter);