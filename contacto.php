<?php 

	$recipient = "info@grupopsa.com, andrew@luckyme.mx";


	$name = $_POST['FirstName']." ".$_POST['LastName'];
	$business = $_POST['brandInquery'];
	$message = $_POST['message'];
	$phone =$_POST["phone"];
	$email = $_POST['email'];

	$formcontent="De: $name \n Correo: $email \n Tel: $phone \n Brand Inquery: $business \n Mensaje: $message";
	$mailheader = "From: $email \r\n";
	
	if($name == false || $business == false || $message == false || $email == false){
		$mail_sent = false;
		
		?>

		<script type="text/javascript">
			alert('No podemos enviar el mensaje con campos en blanco, todos los campos son obligatorios.');
			window.location = 'index.html';
		</script>

		<?php

	} else {
		$mail_sent = mail($recipient, $mailheader, $formcontent) or die("Error!");

		if ($mail_sent == true){ ?>
			<script language="javascript" type="text/javascript">
				alert('Mensaje enviado correctamente.');
				window.location = 'index.html';
			</script>

		<?php 
		} else { 
		?>

			<script type="text/javascript">
				alert('Hubo un error y el mensaje no pudo enviarse, consulta al administrador.');
				window.location = 'index.html';
			</script>
		
		<?php 
		} 
	}
	
		
?>