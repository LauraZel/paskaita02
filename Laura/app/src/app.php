<?php
if(isset($_POST['submit'])) {
    $vardas = trim($_POST['vardas']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);


if(!empty($vardas) && !empty($email) && !empty($message)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        include 'db.php';
        $from = $email;
        $to = "laura.zelionkiene@gmail.comt";
        $subject = "Nauja žiutė";
        $autorius = 'Nuo: ' . $vardas . ', ' . $email;
        $zinute = htmlspecialchars($message);
       // mail($to, $subject, $autorius, $zinute, $from);
       // echo "<script>alert('Dėkojame. Jūsų -inutę gavome. Netrukus su Jumis sisisieksime.');</script>":
    }
}

}

?>