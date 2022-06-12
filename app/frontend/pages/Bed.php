<!-- Modal -->
<div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="w-100 pt-1 mb-5 text-right">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form action="" method="get" class="modal-content modal-body border-0 p-0">
            <div class="input-group mb-2">
                <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
                <button type="submit" class="input-group-text bg-success text-light">
                    <i class="fa fa-fw fa-search text-white"></i>
                </button>
            </div>
        </form>
    </div>
</div>



<!-- Start Content -->
<div class="container py-5">
    <div class="row">
        <div class="col-lg-3">
            <h1 class="h2 pb-4">Categories</h1>
            <ul class="list-unstyled">
                <li class=" category-menu-item">
                    <a class="collapsed d-flex h3 text-decoration-none nav-link link-dark" href="table.php">
                        Table
                        <div>
                            <img class="pl-2 icon-category-menu-1" src="img/table.png" alt=""> <img class="pl-2 icon-category-menu-2" src="img/table.png" alt="">
                        </div>
                    </a>
                </li>
                <li class=" category-menu-item">
                    <a class="collapsed d-flex h3 text-decoration-none nav-link link-dark" href="chair.php">
                        Chair
                        <div>
                            <img class="pl-2 icon-category-menu-1" src="img/chair.png" alt=""> <img class="pl-2 icon-category-menu-2" src="img/chair.png" alt="">
                        </div>
                    </a>
                </li>
                <li class=" category-menu-item">
                    <a class="collapsed d-flex h3 text-decoration-none nav-link link-dark" href="bed.php">
                        Bed
                        <div>
                            <img class="pl-2 icon-category-menu-1" src="img/bed.png" alt=""> <img class="pl-2 icon-category-menu-2" src="img/bed.png" alt="">
                        </div>
                    </a>
                </li>
                <li class=" category-menu-item">
                    <a class="collapsed d-flex h3 text-decoration-none nav-link link-dark" href="lamp.php">
                        Lamp
                        <div>
                            <img class="pl-2 icon-category-menu-1" src="img/lamp.png" alt=""> <img class="pl-2 icon-category-menu-2" src="img/lamp.png" alt="">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-lg-9">
            <div class="row align-items-end">
                <div class="col-md-4 pb-4">
                    <label for="features">Features:</label> <br />
                    <select class="form-select" id="filter-features">
                        <?php
                        if (!isset($_GET['feature'])) echo "<option selected value='all'>All</option>";
                        else echo "<option value='all'>All</option>";
                        $host = "localhost";
                        $user = "root";
                        $pw = "";
                        $database = "hola_house";
                        $conn = mysqli_connect($host, $user, $pw, $database);
                        if (!$conn) {
                            die('Could not connect: ' . mysqli_error($conn));
                        }
                        $sql = "SELECT * FROM category WHERE type = 'bed'";
                        $result = mysqli_query($conn, $sql);
                        if (mysqli_num_rows($result) > 0) {
                            while ($row = mysqli_fetch_assoc($result)) {
                                if (isset($_GET['feature']) && $_GET['feature'] == $row['name']) echo "<option selected value='" . $row['name'] . "'>" . strtoupper($row['name']) . "</option>";
                                else echo "<option value='" . $row['name'] . "'>" . strtoupper($row['name']) . "</option>";
                            }
                        }
                        mysqli_close($conn);
                        ?>
                    </select>
                </div>
                <div class="col-md-4 pb-4">
                    <label for="prices">Price:</label> <br />
                    <select class="form-select" id="filter-prices">
                        <?php
                        if (!isset($_GET['price'])) echo "<option selected value='all'>All</option>";
                        else echo "<option value='all'>All</option>";
                        if (isset($_GET['price']) && $_GET['price'] == 'low-to-high') echo "<option selected value='low-to-high'>Price: Low - High</option>";
                        else echo "<option value='low-to-high'>Price: Low - High</option>";
                        if (isset($_GET['price']) && $_GET['price'] == 'high-to-low') echo "<option selected value='high-to-low'>Price: High - Low</option>";
                        else echo "<option value='high-to-low'>Price: High - Low</option>";
                        ?>
                    </select>
                </div>
                <div class="col-md-2 pb-4">
                    <button type="button" class="btn btn-warning text-dark mb-0" onclick="filterBed()">
                        Apply
                    </button>
                </div>
            </div>
            <div class="row">
                <?php
                $host = "localhost";
                $user = "root";
                $pw = "";
                $database = "hola_house";
                $conn = mysqli_connect($host, $user, $pw, $database);
                if (!$conn) {
                    die('Could not connect: ' . mysqli_error($conn));
                }
                $feature = isset($_GET['feature']) ? $_GET['feature'] : null;
                $price = isset($_GET['price']) ? $_GET['price'] : null;
                $query = null;
                if ($feature == null) {
                    $query = "SELECT COUNT(uid) as total from product where type='bed'";
                } else {
                    $query = "SELECT COUNT(uid) as total from product where type='bed' and category='$feature'";
                }
                $result = mysqli_query($conn, $query);
                $row = mysqli_fetch_assoc($result);
                $total_records = $row['total'];
                if ($total_records > 0) {
                    $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
                    $limit = 9;
                    $total_page = ceil($total_records / $limit);
                    if ($current_page > $total_page) {
                        $current_page = $total_page;
                    } else if ($current_page < 1) {
                        $current_page = 1;
                    }
                    $start = ($current_page - 1) * $limit;
                    if ($feature == null && $price == null) {
                        $query = "SELECT * FROM product WHERE type = 'bed' LIMIT $start, $limit";
                    } elseif ($feature == null && $price != null) {
                        if ($price == 'low-to-high') {
                            $query = "SELECT * FROM product WHERE type = 'bed' ORDER BY price ASC LIMIT $start, $limit";
                        } else {
                            $query = "SELECT * FROM product WHERE type = 'bed' ORDER BY price DESC LIMIT $start, $limit";
                        }
                    } elseif ($feature != null && $price == null) {
                        $query = "SELECT * FROM product WHERE type='bed' and category='$feature' LIMIT $start, $limit";
                    } else {
                        if ($price == 'low-to-high') {
                            $query = "SELECT * FROM product WHERE type='bed' and category='$feature' ORDER BY price ASC LIMIT $start, $limit";
                        } else {
                            $query = "SELECT * FROM product WHERE type='bed' and category='$feature' ORDER BY price DESC LIMIT $start, $limit";
                        }
                    }
                    $result = mysqli_query($conn, $query);
                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_assoc($result)) {
                            echo "
                            <div class='col-md-4 card-group'>
                                <div class='card mb-4 product-wap rounded-0'>
                                    <div class='card rounded-0'>
                                        <img class='card-img rounded-0 img-fluid' src='" . $row['image'] . "'>
                                        <div class='card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center'>
                                            <ul class='list-unstyled'>
                                                <li><a class='btn btn-warning text-dark mt-2' href='product.php?id=" . $row['uid'] . "'><i class='far fa-eye'></i></a></li>
                                                <li><button class='btn btn-warning text-dark mt-2 btn-addcart' data-available='" . $row['amount'] . "' data-id='" . $row['uid'] . "' data-quantity='1'><i class='fas fa-cart-plus'></i></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class='card-body text-center'>
                                        <a href='product.php?id=" . $row['uid'] . "' class='h3 text-decoration-none'>" . $row['name'] . "</a>
                                    </div>
                                    <div class='card-footer text-center'>   
                                        <p class='mb-0'>" . number_format($row['price']) . "VND</p>
                                    </div>
                                </div>
                            </div>";
                        }
                    }
                } else {
                    echo "We're sorry that we couldn't find a suitable product.";
                }
                mysqli_close($conn);
                ?>
            </div>
            <div class="pagination" style="float:right; margin-right: 15px; margin-bottom: 15px;">
                <?php
                // PHẦN HIỂN THỊ PHÂN TRANG
                // BƯỚC 7: HIỂN THỊ PHÂN TRANG

                // nếu current_page > 1 và total_page > 1 mới hiển thị nút prev
                if ($total_records > 0) {
                    if ($current_page > 1 && $total_page > 1) {
                        if (isset($_GET['feature'])) echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . ($current_page - 1) . '&feature=' . $_GET['feature'] . '">Prev</a><li>';
                        else echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . ($current_page - 1) . '">Prev</a></li>';
                    }

                    // Lặp khoảng giữa
                    for ($i = 1; $i <= $total_page; $i++) {
                        // Nếu là trang hiện tại thì hiển thị thẻ span
                        // ngược lại hiển thị thẻ a
                        if ($i == $current_page) {
                            echo '<li class="page-item"><span class="page-link active">' . $i . '</span> </li> ';
                        } else {
                            if (isset($_GET['feature'])) echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . $i . '&feature=' . $_GET['feature'] . '">' . $i . '</a></li>';
                            else echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . $i . '">' . $i . '</a></li>';
                        }
                    }

                    // nếu current_page < $total_page và total_page > 1 mới hiển thị nút prev
                    if ($current_page < $total_page && $total_page > 1) {
                        if (isset($_GET['feature'])) echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . ($current_page + 1) . '&feature=' . $_GET['feature'] . '">Next</a><li>';
                        else echo '<li class="page-item"><a  class="page-link" href="bed.php?page=' . ($current_page + 1) . '">Next</a></li>';
                    }
                }
                ?>
            </div>
        </div>
    </div>
</div>
<!-- End Content -->
<script>
    function filterBed(e) {
        let inputfeature = document.getElementById("filter-features").value;
        let inputPrice = document.getElementById("filter-prices").value;
        if (inputfeature == 'all' && inputPrice == 'all') window.location.href = 'bed.php';
        else if (inputfeature == 'all' && inputPrice != 'all') window.location.href = 'bed.php?price=' + inputPrice;
        else if (inputfeature != 'all' && inputPrice == 'all') window.location.href = 'bed.php?feature=' + inputfeature;
        else window.location.href = 'bed.php?feature=' + inputfeature + '&price=' + inputPrice;
    }
</script>