
/*MENSAJE GMAIL*/

$(document).ready(function(){
	$("#benviar").click(function() {
			var email=$("#correo").val();
			var nom=$("#nombre").val();
			var obser=$("#obs").val();
			//alert(email+nom+obser);
			Email.send({
					Host : "smtp.elasticemail.com",
					Username : "grupometrico@gmail.com",
					Password : "a6d88825-6de7-4145-8826-41226be5c1a0",
					To : email,
					From : "grupometrico@gmail.com",
					Subject : "Notificación",
					Body : "Sr(a): " + nom + "Notificación: "+obser
			}).then(
				message => alert(message)
			);   
	})})