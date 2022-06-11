<?php
$target_dir = "../../../uploads/";
$target_save = basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));


move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);


$username = $_POST['username'];
$host = "localhost";
$user = "root";
$pw = "";
$database = "hola_house";
$conn = mysqli_connect($host,$user,$pw,$database);
if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}
$sql = "UPDATE users SET image='uploads/$target_save' WHERE username='".$username."'";
if ($conn->query($sql) === TRUE) {
     header("location:../../../info.php");
;
} 
else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


?>