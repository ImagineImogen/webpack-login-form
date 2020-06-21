var $ = require('jquery')
import './styles.css'
import axios from 'axios';
//require(style.css)
const API_URL = '/users/'

console.log("it works again")

let loginForm = document.getElementById('signin-form')

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    let loginFormData = new FormData(loginForm)
    console.log(loginFormData)
    axios.post(`${API_URL}login/`, loginFormData)
        .then(response => {
            alert("You've been successfully authorized")
        })
        .catch(error => alert('wrong data, please try again'))
})

let registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit', e => {
    e.preventDefault()

    let registerFormData = new FormData(registerForm);

    axios.post(`${API_URL}register`, registerFormData)
        .then(response => {
            alert('You successfully registered')
        	$(".signup-form").hide();
                $(".login-form").show();
        })
        .catch(error => console.log(error))
});