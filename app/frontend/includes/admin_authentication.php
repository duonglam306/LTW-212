<?php
    if (isset($_COOKIE['admin']) == false) {
        // Nếu người dùng chưa đăng nhập thì chuyển hướng website sang trang đăng nhập
        header('Location: admin.php');
    }
?>