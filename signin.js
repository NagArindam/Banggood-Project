var form = document.querySelector("form");

var userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    var data = {
        email: form.email.value,
        password: form.password.value,
    }

    if(checkSignin(data.email,data.password)==true){
        localStorage.setItem("signin",JSON.stringify(data));
        alert("Sign in Successful");
        window.location.href="home_page.html"
    }
    else{
        alert("Wrong Email or Password");
    }
})

function checkSignin(email,password){
    var filteredEmailPassword = userData.filter(function(elem){
        return elem.email == email && elem.password == password;
    })
    if(filteredEmailPassword.length>0){
        return true;
    }
    else{
        return false;
    }
}