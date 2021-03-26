const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Helper function show error msg
function showError(input, msg) {
    input.parentElement.classList.add('error');
    input.nextElementSibling.innerText = msg;
};

// Helper function show success
function showSuccess(input) {
    input.parentElement.classList.add('success');
} ;


// Helper function get formatted input field
function getFormattedField(input) {
    return input.id[0].toUpperCase() + input.id.slice(1);
}

// Helper function check valid email
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input.value)){
        showError(input, 'Please enter a valid email');
    } else {
        showSuccess(input);
    }
};

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === '') {
            showError(input, `${getFormattedField(input)} is required.`);
        } else {
            showSuccess(input);
        }
    })
}

// Check length of fields
function checkLength(input, min, max) {
    if(input.value.length < min || input.value.length > max) {
        showError(input, `${getFormattedField(input)} must be between ${min} and ${max} characters long.`);
    } else {
        showSuccess(input);
    }
}

// Check password match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    checkRequired([username, email, password, password2]);
    checkLength(username, 4, 15);
    checkLength(password, 6, 12);
    validateEmail(email);
    checkPasswordMatch(password, password2);
});

