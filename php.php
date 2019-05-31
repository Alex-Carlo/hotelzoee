<?php

$destino="alex.carlo@cecar.edu.co";
$nombre= $_POST["nombre"];
$correo= $_POST["correo"];
$tema= $_POST["tema"];
$asunto= $_POST["asunto"];

$contenido = "Nombre : " . $nombre . "\nCorreo: " . $correo . "\nTema: " . $tema . "\nMensaje : " . $asunto;
mail($destino,$tema,$contenido);
header("Location:gracias.html");
?>