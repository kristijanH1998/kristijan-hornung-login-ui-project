function new_account(){
    var name = document.getElementById("user").value;
    var pw = document.getElementById("pw").value;
    var pw2 = document.getElementById("pw2").value;
    if(name != "" && pw != "" && pw2 != "" && (pw == pw2)){
        alert("Success! Your account has been created.");
    } else if (pw != pw2){
        alert("Error: Passwords do not match. Try again.");
    } else {
        alert("Error: one or more fields are left empty. Try again.");
    }
}
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

signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});