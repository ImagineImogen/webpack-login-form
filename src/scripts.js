//var $ = require('jquery')
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

