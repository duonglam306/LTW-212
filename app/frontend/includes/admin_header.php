<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hola House Admin</title><!-- Google Font: Source Sans Pro-->
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback"><!-- Font Awesome-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css"><!-- DataTables-->
    <link rel="stylesheet" href="plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="plugins/datatables-buttons/css/buttons.bootstrap4.min.css"><!-- Theme style-->
    <link rel="stylesheet" href="css/adminlte.min.css">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
    <!-- select2-->
    <link rel="stylesheet" href="plugins/select2/css/select2.min.css">
    <link rel="stylesheet" href="plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">
    <!-- sweetalert2-->
    <link rel="stylesheet" href="plugins/sweetalert2/sweetalert2.min.css">
    <link rel="stylesheet" href="plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
    <style>
        .material-symbols-rounded {
            font-variation-settings:
                'FILL'1,
                'wght'400,
                'GRAD'0,
                'opsz'48
        }

        .material-symbols-rounded.circle {
            font-variation-settings:
                'FILL'0,
                'wght'400,
                'GRAD'0,
                'opsz'20;
            font-size: 15px !important;
        }

        .nav-item a {
            display: flex;
            align-items: center;
        }

        .nav-item .nav-icon {
            margin-right: 10px;
        }

        .nav-treeview li {
            margin-left: 20px;
        }

        .fur-bg {
            background: linear-gradient(#f4f6f9, rgba(0, 0, 0, 0.2)), url("./img/bg.jpg");
            background-size: cover;
            background-position: center bottom;
        }
    </style>
</head>

<body class="hold-transition sidebar-mini layout-fixed" data-panel-auto-height-mode="height">
    <div class="wrapper">
        <!-- Navbar-->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links-->
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" data-widget="pushmenu" href="#" role="button">
                        <span class="material-symbols-rounded">
                            menu
                        </span></i></a></li>
                <li class="nav-item d-none d-sm-inline-block"><a href="admin_dashboard.php" class="nav-link">Home</a></li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li style="margin-right:10px;"><a href="index.php" class="nav-link">Back to web</a></li>
                <button class='nav-icon d-none d-lg-inline px-3 btn-warning' onclick='logout()'>
                    <i class='fa fa-fw text-white fa-sign-out-alt mr-2'></i>
                    <span class='text-white'>Logout<span>
                </button>
            </ul>

        </nav><!-- /.navbar-->
        <!-- Main Sidebar Container-->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo--><a class="brand-link" href="admin_dashboard.php"><img class="brand-image img-circle elevation-3" src="img/favicon.ico" alt="Admin Logo"><span class="brand-text font-weight-light">Hola House</span></a><!-- Sidebar-->
            <div class="sidebar">
                <!-- Sidebar Menu-->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-header">PRODUCTS MANAGEMENT</li>
                        <li class="nav-item"><a class="nav-link" href="#">
                                <span class="nav-icon material-symbols-rounded">
                                    table_restaurant
                                </span>
                                <p>Table
                                    <i class="material-symbols-rounded right">
                                        chevron_left
                                    </i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_table.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>List</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_brand_table.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>Type</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">
                                <span class="nav-icon material-symbols-rounded">
                                    chair
                                </span>
                                <p>Chair
                                    <i class="material-symbols-rounded right">
                                        chevron_left
                                    </i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_chair.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>List</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_brand_chair.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>Type</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#">
                                <span class="nav-icon material-symbols-rounded">
                                    king_bed
                                </span>
                                <p>Bed
                                    <i class="material-symbols-rounded right">
                                        chevron_left
                                    </i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item"><a class="nav-link" href="admin_bed.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>List</p>
                                    </a></li>
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_brand_bed.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>Type</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="nav-icon material-symbols-rounded">
                                    floor_lamp
                                </span>
                                <p>Lamp
                                    <i class="material-symbols-rounded right">
                                        chevron_left
                                    </i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_lamp.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>List</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="admin_brand_lamp.php">
                                        <span class="circle nav-icon material-symbols-rounded">
                                            circle
                                        </span>
                                        <p>Type</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-header">CUSTOMER MANAGEMENT</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_account.php">
                                <span class="nav-icon material-symbols-rounded">
                                    account_circle
                                </span>
                                <p>Accounts</p>
                            </a>
                        </li>
                        <li class="nav-header">ORDER MANAGEMENT</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_order.php">
                                <span class="nav-icon material-symbols-rounded">
                                    shopping_cart
                                </span>
                                <p>Order</p>
                            </a>
                        </li>
                        <li class="nav-header">POST MANAGEMENT</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_post.php">
                                <span class="nav-icon material-symbols-rounded">
                                    newspaper
                                </span>
                                <p>Posts</p>
                            </a>
                        </li>
                        <li class="nav-header">COMMENTS MANAGEMENT</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_productcomments.php">
                                <span class="nav-icon material-symbols-rounded">
                                    chat_bubble
                                </span>
                                <p>Product Comments</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_postcomment.php">
                                <span class="nav-icon material-symbols-rounded">
                                    reviews
                                </span>
                                <p>Post Comments</p>
                            </a>
                        </li>
                        <li class="nav-header">USER INTERFACE</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_home.php">
                                <span class="nav-icon material-symbols-rounded">
                                    home
                                </span>
                                <p>Home</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_about.php">
                                <span class="nav-icon material-symbols-rounded">
                                    visibility
                                </span>
                                <p>About</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_contact.php">
                                <span class="nav-icon material-symbols-rounded">
                                    call
                                </span>
                                <p>Contacts</p>
                            </a>
                        </li>
                        <li class="nav-header">FEEDBACK MANAGEMENT</li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin_feedback.php">
                                <span class="nav-icon material-symbols-rounded">
                                    rate_review
                                </span>
                                <p>Feedback</p>
                            </a>
                        </li>
                    </ul>
                </nav><!-- /.sidebar-menu-->
            </div><!-- /.sidebar-->
        </aside><!-- Content Wrapper. Contains page content-->
        <?php
        if (isset($_COOKIE['admin'])) echo "
        <script>
            function logout() {
                sessionStorage.removeItem('" . $_COOKIE['admin'] . "');
                document.cookie.split(';').forEach(function(c) { document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/'); });
                window.location.href = 'admin.php';
            }
        </script>";
        ?>