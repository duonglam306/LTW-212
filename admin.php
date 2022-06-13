<?php
    if (isset($_COOKIE['admin']) == true) {
        header('Location: admin_dashboard.php');
    }
?>
<?php
if (isset($_POST['submitBtn'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (empty($username) || empty($password)) echo
    "<script> 
                var x = document.getElementById('message');
                x.style.color = 'red';
                x.innerHTML = 'Please fill out all information';
            </script>";
    else {
        $host = "localhost";
        $user = "root";
        $pw = "";
        $database = "hola_house";
        $conn = mysqli_connect($host, $user, $pw, $database);
        if (!$conn) {
            die('Could not connect: ' . mysqli_error($conn));
        }
        $sql = "SELECT * FROM users WHERE username = '$username' and role = 'admin'";
        $result = mysqli_query($conn, $sql);
        if (mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            if ($password == $row['password']) {
                session_start();
                $_SESSION[$username] = $row['name'];
                setcookie('admin', $username, time() + (86400 * 30), "/");
                header('Location: admin_dashboard.php');
                // echo "<script>history.go(-2);</script>";
            } else echo
            "<script> 
                        var x = document.getElementById('message');
                        x.style.color = 'red';
                        x.innerHTML = 'Incorrect password';
                    </script>";
        } else echo
        "<script> 
                    var x = document.getElementById('message');
                    x.style.color = 'red';
                    x.innerHTML = 'Incorrect username or password';
                </script>";
        $conn->close();
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title> Hola House Admin </title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/templatemo.css">
    <link rel="stylesheet" href="css/custom.css">

    <!-- Load fonts style after rendering the layout styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap">
    <link rel="stylesheet" href="css/fontawesome.min.css">

    <link rel="stylesheet" href="plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="col-1 col-md-2">
                <img src="img/logo.png" class="w-100" alt="logo_admin_hola_house">
            </div>

            <a class="navbar-brand text-warning logo h2 align-self-center" href="index.php">
                Hola House <i class="fa fa-chevron-right"></i>
            </a>
        </div>
    </nav>
    <div class="py-5 h-100" style="background-color:#ffb001">
        <div class="col-12 d-flex justify-content-around align-items-center h-100">
            <div class="col-12 col-lg-5 col-xl-5 d-none d-lg-inline">
                <img src="img/login_bg_admin.png" alt="logo_bg_login_admin" class="w-100">
            </div>
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4">

                            <h2 class="fw-bold mb-2 text-uppercase text-warning">Login to <br> Hola House Admin</h2>
                            <p class="text-white-50 mb-4">Please enter your username and password!</p>

                            <form action="" method="post">
                                <div class="row align-items-center pb-3">
                                    <div class="col-3">
                                        <label for="userInput" class="col-form-label">Username</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" name="username" id="userInput" class="form-control">
                                    </div>
                                </div>
                                <div class="row align-items-center pb-3">
                                    <div class="col-3">
                                        <label for="inputPassword" class="col-form-label">Password</label>
                                    </div>
                                    <div class="col-9">
                                        <input type="password" id="inputPassword" name="password" class="form-control">
                                    </div>
                                </div>
                                <p id="message" class="mt-2" style="color:#ff4f4f !important;"></p>
                                <button class="btn btn-warning btn-lg px-5 mt-4" type="submit" name="submitBtn">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
