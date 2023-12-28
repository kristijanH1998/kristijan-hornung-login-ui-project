function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "kristijanH1998" && password=="kh1998"){
        alert("Success!");
    } else {
        alert("Try different username and/or password.");
    }
}
const formInner = document.querySelector(".form-inner");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");

const book = document.querySelector(".book");
let current = 1;

signupBtn.onclick = (()=>{
    if(current == 1){
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
    } else if(current == 2){
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
        book.style.marginLeft = "-320%";
    } else if(current == 3){
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
        book.style.marginLeft = "-640%";
    } else if(current == 4){
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
        book.style.marginLeft = "-960%";
    }
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    book.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});

const nextFrs = document.querySelector(".firstNext");
const next1 = document.querySelector(".next-1");
const next2 = document.querySelector(".next-2");
const prev1 = document.querySelector(".prev-1");
const prev2 = document.querySelector(".prev-2");
const prev3 = document.querySelector(".prev-3");

nextFrs.onclick = (()=>{
    book.style.marginLeft = "-320%";
});
next1.onclick = (()=>{
    book.style.marginLeft = "-640%";
});
next2.onclick = (()=>{
    book.style.marginLeft = "-960%";
});
prev1.onclick = (()=>{
    book.style.marginLeft = "0%";
});
prev2.onclick = (()=>{
    book.style.marginLeft = "-320%";
});
prev3.onclick = (()=>{
    book.style.marginLeft = "-640%";
});

const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const submitBtn = document.querySelectorAll(".submit");

nextFrs.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
next1.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
next2.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
function new_account(){
    var name = document.getElementById("user").value;
    var pw = document.getElementById("pw").value;
    var pw2 = document.getElementById("pw2").value;
    const frsnm = document.getElementById("firstname").value;
    const scnm = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;

    if(name != "" && pw != "" && pw2 != "" && (pw == pw2) && birthday && frsnm != "" && scnm != "" && email != ""){
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        setTimeout(function(){
            alert("Success! Your account has been created.");
        },800);
    } else if (pw != pw2){
        alert("Error: Passwords do not match. Try again.");
    } else {
        alert("Error: one or more fields are left empty. Try again.");
    }
}
prev1.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prev2.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prev3.addEventListener("click", function(event){
    event.preventDefault();
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});