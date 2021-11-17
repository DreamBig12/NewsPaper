let list = document.querySelector(".fa-list");
let navBar = document.querySelector("#navBar");


list.onclick = function() {
    navBar.classList.toggle("show");
}

let user = document.querySelector(".fa-user");
let loginCont = document.querySelector(".login-container");
let leave = document.querySelector(".fa-times");

user.onclick = function() {
    loginCont.classList.toggle("active");
}

leave.onclick = function() {
    loginCont.classList.toggle("active");
}

let hello = document.querySelector(".hello");
let submit = document.querySelector(".submit");
let username = document.querySelector(".username");

submit.onclick = function() {
    let helloText = document.createTextNode(`Hello ${username.value}`);

    hello.appendChild(helloText);

    loginCont.classList.toggle("active");
}

let ourSpan = Array.from(document.querySelectorAll(".percent span"));
let specification = document.querySelector(".specification")


specification.addEventListener("mouseover",function(){

    ourSpan.forEach(function(ele){
        
        ele.style.width = ele.getAttribute("data");
    }) 
})


