<?php
    $id = $_POST['id'];
    $host = "localhost";
    $user = "root";
    $pw = "";
    $database = "hola_house";
    $conn = mysqli_connect($host,$user,$pw,$database);
    if (!$conn) {
        die('Could not connect: ' . mysqli_error($conn));
    }
    $sql = "DELETE from product WHERE uid='".$id."'";
    if ($conn->query($sql) === TRUE) {
        echo "Delete successfully!";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>