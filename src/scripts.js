//var $ = require('jquery')
//import './styles.css'
require(style.css)
var API_URL = '/users/'


$('form').submit(function(event){
	var userName = $('#Username').val();
	var userPassword = $('#password').val()
	event.preventDefault();
	$.ajax({
	url: API_URL,
	type: 'POST',
	data: {
		Username: UserEmail,
		password: userPassword
	},
	done: function(response) {
		console.log(response)
	}
});

})
console.log("it is not working!")

document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement('h1')
  element.innerHTML = "Hello World"
  document.body.appendChild(element)
})

