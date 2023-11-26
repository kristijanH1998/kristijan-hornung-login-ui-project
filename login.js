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
signupBtn.onclick = (()=>{
    formInner.style.flexDirection = "row-reverse";
});
loginBtn.onclick = (()=>{
    formInner.style.flexDirection = "row";
});
signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});