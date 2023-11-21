function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "kristijanH1998" && password=="kh1998"){
        alert("Success!");
    } else {
        alert("Try different username and/or password.");
    }
}