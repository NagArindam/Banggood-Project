var form = document.querySelector("form");

var userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit",function(event){
    event.preventDefault();
    var data = {
        email: form.email.value,
        password: form.password.value
    }
    
    if(checkEmail(data.email)==true){
        userData.push(data);
        localStorage.setItem("userData",JSON.stringify(userData));      
    }
    else{
        alert("Account Already Exists");
    }
})

function checkEmail(email){
    var filteredEmail = userData.filter(function(elem){
        return email == elem.email;
    })
    if(filteredEmail.length>0){
        return false;
    }
    else{
        return true;
    }
}