<?php
    header('Content-type: application/json');

    $name = @trim(stripslashes($_POST['name']));
    $email = @trim(stripslashes($_POST['email']));
    $telefono = @trim(stripslashes($_POST['telefono']));
    $asunto = @trim(stripslashes($_POST['asunto']));
    $message = @trim(stripslashes($_POST['message']));

    $email_from = $email;
    $email_to = 'estudiocreativoqmart@gmail.com';
    $body = 'Nombre: ' . $name . "\n\n" . 'E-mail: ' . $email . "\n\n" . 'Teléfono: ' . $telefono . "\n\n" . 'Asunto: ' . $asunto . "\n\n" . 'Mensaje: ' . $message;
    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');

    Header("Location: ./index.html");
?>
