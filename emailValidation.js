let email = document.querySelector('email-form');
let emailKey = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(email){
    if (!(email.value.match(emailKey))) {
        alert('Please provide a valid email address');
        email.focus();
        return false;
    } else {
        alert('Success! Form has been submitted.');
    }
}

function submitForm(){
    alert('Success! Form has been submitted.');
}