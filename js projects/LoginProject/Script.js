var op_name = document.querySelector('.op_name');
var op_email = document.querySelector('.op_email');
var names = document.querySelector(".name");
var email = document.querySelector('.email');
var pass = document.querySelector('.pass');
var toggle = document.querySelector('.toggle');
var submit = document.querySelector('.submit');

function validation(event) {
    event.preventDefault();

    var name_value = names.value.trim();
    var email_value = email.value.trim();
    var pass_value = pass.value.trim();

    if (name_value !== '' && email_value !== '' && pass_value !== '') {
        var pasV = pass_value.split("");
        if (pasV[0] === name_value[0]) {
            alert("Password should not start with the name");
        } else {
            var new_user = { name: name_value, email: email_value, pass: pass_value };
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(new_user);
            localStorage.setItem('users', JSON.stringify(users));
            displayValue()
        }
    } else {
        alert("Please fill in all fields properly");
    }
    document.querySelector('.loginForm').reset();
}


function displayValue(){
 

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
        op_name.innerHTML = ' '
        op_email.innerHTML = ' '
        var newEle = document.createElement('b')
        var newEmail = document.createElement('b')

        newEle.innerHTML = user.name;
        newEmail.innerHTML = user.email;

        op_name.appendChild(newEle)
        op_email.appendChild(newEmail)

    });
}

function hideShow(){
    if (pass.type == "password") {
        pass.type = "text";
        toggle.innerHTML = "hide";
      } else {
        pass.type = "password";
        toggle.innerHTML = "Show";
      }
}

toggle.addEventListener('click',hideShow);
submit.addEventListener('click', validation);
