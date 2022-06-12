<?php
$host = "localhost";
$user = "root";
$pw = "";
$database = "hola_house";
$conn = mysqli_connect($host, $user, $pw, $database);

$db = new PDO('mysql:host=localhost;dbname=hola_house;charset=utf8mb4', 'root', '');

if (!$conn) {
    die('Could not connect: ' . mysqli_error($conn));
}

$orders_num_sql = 'SELECT COUNT(*) FROM cart';
$acc_num_sql = "SELECT COUNT(*) FROM users";
$products_num_sql = "SELECT COUNT(*) FROM product";
$posts_num_sql = "SELECT COUNT(*) FROM post";

$orders_num = $db->query($orders_num_sql)->fetchColumn();
$acc_num = $db->query($acc_num_sql)->fetchColumn();
$products_num = $db->query($products_num_sql)->fetchColumn();
$posts_num = $db->query($posts_num_sql)->fetchColumn();


?>
<!-- <script>console.log(<php>$orders_num_res,$acc_num_res,$products_num_res,$news_num_res</php>)</script> -->
<!-- Content Wrapper. Contains page content -->
<div class="fur-bg content-wrapper" style="background: '../../../img/background.jpg'">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Stats</h1>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3><?php echo $orders_num ?></h3>
                            <p>Orders</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-bag"></i>
                        </div>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3><?php echo $acc_num ?></h3>
                            <p>Accounts</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-stats-bars"></i>
                        </div>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h3><?php echo $products_num ?></h3>
                            <p>Products</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-person-add"></i>
                        </div>
                    </div>
                </div>
                <!-- ./col -->
                <div class="col-lg-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3><?php echo $posts_num ?></h3>
                            <p>Posts</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-pie-graph"></i>
                        </div>
                    </div>
                </div>
                <!-- ./col -->
            </div>
            <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
