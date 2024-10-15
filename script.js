function validate(e) {
    e.preventDefault();
}

const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const tel = document.getElementById('tel').value;
const color = get.getElementById('fav_color').value;
const age = get.getElementById('age').value;
const date = get.getElementById('birthday').value;
const msgBox = getElementById('message');

let message = '';

if (email === '') {
    message = 'Please enter your email.';
    msgBox.style.color = red;
}
else if (pass === '') {
    message = 'Your password must be of 1-12 letters.';
    msgBox.style.color = red;
}
else if (tel === '') {
    message = 'Please enter your phone number.';
    msgBox.style.color = red;
}
else if (color === '') {
    message = 'Please choose your favourite color';
    msgBox.style.color = red;
}
else if (age === '') {
    message = 'Your age must be between 25-55';
    msgBox.style.color = red;
}
else if (date === '') {
    message = 'Please enter your date of birth';
    msgBox.style.color = red;
}

else {
    message = 'Login Successful!';
    msgBox.style.color = green;
}

msgBox.innerText = message;