var iname = document.querySelector("#i_name")
var pass = document.querySelector("#i_pass")
var email = document.querySelector("#i_email")
var submit = document.querySelector("#submit")
var login = document.querySelector("#login")
var sname = document.querySelector("#s_name")
var pname = document.querySelector('#s_pass')
var semail = document.querySelector('#s_email')
var tgle = document.querySelector("#tgle")

function validation(e) {
    e.preventDefault()
    var name_value = iname.value;
    var pass_value = pass.value;
    var email_value = email.value;

    if (!name_value && !pass_value && !email_value) {
        sname.style.display = 'block';
        pname.style.display = 'block';
        semail.style.display = 'block'
    }
    else if (!name_value) {
        sname.style.display = 'block';
    }
    else if (!pass_value) {
        pname.style.display = 'block';
        if (pass_value.length > 8) {
            pname.innerHTML = "Password should be of 8"
            alert('hello')
        }
    }
    else if (!email_value) {
        semail.style.display = 'block'
    }
    else if(name_value && pass_value && email_value){
        var users = JSON.parse(localStorage.getItem("Users")) || [];
        var emailExist = users.some(user=> user.email === email_value)
        if(emailExist){
            semail.style.display = 'block'
            semail.innerHTML = "Email Exist"
        }
        else{
            users.push({ name: name_value, email: email_value });
            localStorage.setItem("Users", JSON.stringify(users));
            iname.value = "";
            pass.value = "";
            email.value = ""; 
            
        }
    }
}
function toggle(e) {
    e.preventDefault()
    var pass_value = pass.value;
    if (!pass_value) {
        pname.style.display = "block"
    } else if (pass.type === "password") {
        pass.type = "text"
        tgle.innerHTML = "Hide"
    }
    else {
        pass.type = "password"
        tgle.innerHTML = "Show"
    }
}
tgle.addEventListener("click", toggle)
submit.addEventListener("click", validation)
