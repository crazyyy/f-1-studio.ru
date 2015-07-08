<?php

date_default_timezone_set('Europe/Moscow');
// User settings
$to = "f-1-studio@yandex.ru";
$subject = "Заказ с главной посадочной страницы";

if(@$_POST["hidden"])
  {
    $dt=date("d F Y, H:i:s"); // дата и время

    $fnm=$_POST["name"];
    $fnm=htmlspecialchars($fnm); // обрабатываем


    $email="f-1-studio@yandex.ru"; // e-mail откуда письмо

    $phone=$_POST["email"];

    $mess.="Имя: $fnm\n";
    $mess.="Почта: $phone";
    $mess .= "\n\nIP: " . $_SERVER["REMOTE_ADDR"];
    $mess .= "\n\nUSER AGENT: " . $_SERVER["HTTP_USER_AGENT"];

    $headers = "From: $email\n";
    $headers .= "X-Mailer: PHP/SimpleModalContactForm\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "Content-Transfer-Encoding: quoted-printable\n";
    mail($to, $subject, $mess, $headers); // отправляем
  }
?>
