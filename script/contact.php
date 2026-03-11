<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "@gmail.com";

    $mail_subject = "New Contact Message: " . $subject;

    $mail_body = "Name: " . $name . "\n";
    $mail_body .= "Email: " . $email . "\n\n";
    $mail_body .= "Message:\n" . $message;

    $headers = "From: " . $email;

    if (mail($to, $mail_subject, $mail_body, $headers)) {

        header("Location: ../pages/contact.html?status=success");

    } else {

        header("Location: ../pages/contact.html?status=error");

    }

    exit();

}

?>