// forEach method excutes a function once for each array element 
// syntax forEach(callBackFunction(Element, Index,Array) {}, thisArg)
// Element => The Current element being processed in the array
// index => the index of the current element being processed in the array
// array => the current Array
// Note 1- Does not return anything [Undefined]
//      2- "Break" will not break the loop

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function(ele){
    // console.log(ele);
    ele.onclick = function(){
        allLis.forEach(function(ele){
            // remove active class form all elements
            ele.classList.remove("active");
        })
        // add active for this element
        this.classList.add("active");
        // hide all divs on clicks
            allDivs.forEach(function(ele){
                ele.style.display = "none";
            })
    };
});


// console.log(allLis);