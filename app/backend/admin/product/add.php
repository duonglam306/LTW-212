<?php
$name = $_POST['name'];
$description = $_POST['description'];
$amount = $_POST['amount'];
$price = $_POST['price'];
$brand = $_POST['brand'];
$image = $_POST['image'];
$type = $_POST['type'];
$host = "localhost";
$user = "root";
$pw = "";
$database = "hola_house";
$conn = mysqli_connect($host, $user, $pw, $database);
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}
$sql = "INSERT INTO product(name,description,price,image,type,category,amount) VALUES('" . $name . "','" . $description . "','" . $price . "','" . $image . "','" . $type . "','" . $brand . "','" . $amount . "')";
if ($conn->query($sql) === TRUE) {
    echo "Add successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
