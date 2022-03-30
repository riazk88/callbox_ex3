const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

    clearMessages();
    let errorFlag=false;

    if(nameInput.value.length <1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText="Invalid email";
        email.classList.add("error-border");
        errorFlag=true;
    }

    if(message.value.length <1){
        errorNodes[2].innerText="Please enter message";
        message.classList.add("error-border");
        errorFlag=true;
    }

    if(!errorFlag){
        success.innerText="Success!";
    }
}

function clearMessages() {
    for(let i=0; i<errorNodes.length; i++) {
        errorNodes[i].innerText="";
    }

    success.innerText="";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}





// const form = document.getElementById('signup');

// document.addEventListener("DOMContentLoaded", function() {
//     field.name = document.getElementById('name');
//     field.email = document.getElementById('email');
//     field.message = document.getElementById('message');
// })

// // checks if user entered valid value 
// function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined' ) return false;
//     return (value.length > 0);
// }

// // checks if email is valid
// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
// }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
   
//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//     field.className = 'placeholderRed';
//     } else {
//     field.className = '';
//     }
   
//     return isFieldValid;
// }

// function isValid() {
//     var valid = true;
    
//     valid &= fieldValidation(fields.name, isNotEmpty);
//     valid &= fieldValidation(fields.email, isEmail);
//     valid &= fieldValidation(fields.message, isNotEmpty);
   
//     return valid;
// }

// class User {
//     constructor(name, email, message) {
//     this.name = name;
//     this.email = email;
//     this.message = message;
//     }
// }

// function sendContract() {
//     if (isValid()) {
//         let usr = new User(name.value, email.value);

//         alert('${usr.name} Thanks for Sharing!')
//     } else {
//         alert("There was an Error")
//     }
// }
