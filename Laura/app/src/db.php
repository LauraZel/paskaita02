<?php
define("DB_SERVER", "localhost:8889");
define("DB_USER", "root");
define("DB_PASSWORD", "root");
define("DB_NAME", "forma");

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
if($mysqli->connect_error) {
    echo 'Sorry klaida.';
    echo 'Klaida: ' . $mysqli->connect_error . ' \n';
    exit();

}

mysqli_query($mysqli, "INSERT INTO klientai (vardas, email, message)
VALUES('$_POST[vardas]', '$_POST[email]', '$_POST[message]')");

?>