<?php
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $amount = $_POST['amount'];
    $price = $_POST['price'];
    $brand = $_POST['brand'];
    $image = $_POST['image'];
    $type= $_POST['type'];
    $host = "localhost";
    $user = "root";
    $pw = "";
    $database = "hola_house";
    $conn = mysqli_connect($host,$user,$pw,$database);
    if (!$conn) {
        die('Could not connect: ' . mysqli_error($conn));
    }
    $sql = "UPDATE product SET name='".$name."', description='".$description."', price='".$price."', amount='".$amount."', category='".$brand."', image='".$image."' WHERE uid='".$id."'";
    if ($conn->query($sql) === TRUE) {
        echo "Update successfully!";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
