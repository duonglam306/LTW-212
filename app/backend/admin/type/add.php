<?php
    $name = strtolower($_POST['name']);
    $type=$_POST['type']    

    $host = "localhost";
    $user = "root";
    $pw = "";
    $database = "hola_house";
    $conn = mysqli_connect($host,$user,$pw,$database);
    if (!$conn) {
        die('Could not connect: ' . mysqli_error($conn));
    }
    $sql = "INSERT INTO category(name,type) VALUES('".$name."', '".$type."')";
    if ($conn->query($sql) === TRUE) {
        echo "Add successfully!";
    } 
    else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>