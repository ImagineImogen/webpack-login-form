var $ = require('jquery')
//import './styles.css'
require(style.css)


$('form').submit(function(event){
	var userEmail = $('#email').val();
	var userPassword = $('#password').val()
	event.preventDefault();
	$.ajax({
	url: '/',
	type: 'POST',
	data: {
		email: UserEmail
	},
	success: function(response) {
		console.log(response)
	}
});

})
console.log("it is working!")

