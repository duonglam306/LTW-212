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
            <li class="pb-3">
                    <a class="collapsed d-flex justify-content-between h3 text-decoration-none nav-link link-dark" href="table.php">
                        Table
                    </a>
                </li>
                <li class="pb-3">
                    <a class="collapsed d-flex justify-content-between h3 text-decoration-none nav-link link-dark" href="chair.php">
                        Chair
                    </a>
                </li>
                <li class="pb-3">
                    <a class="collapsed d-flex justify-content-between h3 text-decoration-none nav-link link-dark" href="bed.php">
                        Bed
                    </a>
                </li>
                <li class="pb-3">
                    <a class="collapsed d-flex justify-content-between h3 text-decoration-none nav-link link-dark" href="lamp.php">
                        Lamp
                    </a>
                </li>
            </ul>
        </div>
        <div class="col-lg-9">
            <div class="row align-items-end">
                <div class="col-md-4 pb-4">
                    <label for="brands">Brands:</label> <br />
                    <select class="form-select" id="filter-brands">
                        <?php
                        if (!isset($_GET['brand'])) echo "<option selected value='all'>All</option>";
                        else echo "<option value='all'>All</option>";
                        $host = "localhost";
                        $user = "root";
                        $pw = "";
                        $database = "hola_house";
                        $conn = mysqli_connect($host, $user, $pw, $database);
                        if (!$conn) {
                            die('Could not connect: ' . mysqli_error($conn));
                        }
                        $sql = "SELECT * FROM category WHERE type = 'table'";
                        $result = mysqli_query($conn, $sql);
                        if (mysqli_num_rows($result) > 0) {
                            while ($row = mysqli_fetch_assoc($result)) {
                                if (isset($_GET['brand']) && $_GET['brand'] == $row['name']) echo "<option selected value='" . $row['name'] . "'>" . strtoupper($row['name']) . "</option>";
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
                    <button type="button" class="btn btn-warning text-dark mb-0" onclick="filterLaptop()">
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
                $brand = isset($_GET['brand']) ? $_GET['brand'] : null;
                $price = isset($_GET['price']) ? $_GET['price'] : null;
                $query = null;
                if ($brand == null) {
                    $query = "SELECT COUNT(uid) as total from product where type='table'";
                }
                else {
                    $query = "SELECT COUNT(uid) as total from product where type='table' and category='$brand'";
                }
                $result = mysqli_query($conn, $query);
                $row = mysqli_fetch_assoc($result);
                $total_records = $row['total'];
                $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
                $limit = 9;
                $total_page = ceil($total_records / $limit);
                if ($current_page > $total_page) {
                    $current_page = $total_page;
                } else if ($current_page < 1) {
                    $current_page = 1;
                }
                $start = ($current_page - 1) * $limit;
                if ($brand == null && $price == null) {
                    $query = "SELECT * FROM product WHERE type = 'table' LIMIT $start, $limit";
                }
                elseif ($brand == null && $price != null) {
                    if ($price == 'low-to-high') {
                        $query = "SELECT * FROM product WHERE type = 'table' ORDER BY price ASC LIMIT $start, $limit";
                    }
                    else {
                        $query = "SELECT * FROM product WHERE type = 'table' ORDER BY price DESC LIMIT $start, $limit";
                    }
                }
                elseif ($brand != null && $price == null) {
                    $query = "SELECT * FROM product WHERE type='table' and category='$brand' LIMIT $start, $limit";
                }
                else {
                    if ($price == 'low-to-high') {
                        $query = "SELECT * FROM product WHERE type='table' and category='$brand' ORDER BY price ASC LIMIT $start, $limit";
                    }
                    else {
                        $query = "SELECT * FROM product WHERE type='table' and category='$brand' ORDER BY price DESC LIMIT $start, $limit";
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
                mysqli_close($conn);
                ?>
            </div>
            <div class="pagination" style="float:right; margin-right: 15px; margin-bottom: 15px;">
                <?php
                // PHẦN HIỂN THỊ PHÂN TRANG
                // BƯỚC 7: HIỂN THỊ PHÂN TRANG

                // nếu current_page > 1 và total_page > 1 mới hiển thị nút prev
                if ($current_page > 1 && $total_page > 1) {
                    if (isset($_GET['brand'])) echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . ($current_page - 1) . '&brand=' . $_GET['brand'] . '">Prev</a><li>';
                    else echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . ($current_page - 1) . '">Prev</a></li>';
                }

                // Lặp khoảng giữa
                for ($i = 1; $i <= $total_page; $i++) {
                    // Nếu là trang hiện tại thì hiển thị thẻ span
                    // ngược lại hiển thị thẻ a
                    if ($i == $current_page) {
                        echo '<li class="page-item"><span class="page-link active">' . $i . '</span> </li> ';
                    } else {
                        if (isset($_GET['brand'])) echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . $i . '&brand=' . $_GET['brand'] . '">' . $i . '</a></li>';
                        else echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . $i . '">' . $i . '</a></li>';
                    }
                }

                // nếu current_page < $total_page và total_page > 1 mới hiển thị nút prev
                if ($current_page < $total_page && $total_page > 1) {
                    if (isset($_GET['brand'])) echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . ($current_page + 1) . '&brand=' . $_GET['brand'] . '">Next</a><li>';
                    else echo '<li class="page-item"><a  class="page-link" href="table.php?page=' . ($current_page + 1) . '">Next</a></li>';
                }
                ?>
            </div>
        </div>
    </div>
</div>
<!-- End Content -->
<script>
    function filterLaptop(e) {
        let inputBrand = document.getElementById("filter-brands").value;
        let inputPrice = document.getElementById("filter-prices").value;
        if (inputBrand == 'all' && inputPrice == 'all') window.location.href = 'table.php';
        else if (inputBrand == 'all' && inputPrice != 'all') window.location.href = 'table.php?price=' + inputPrice;
        else if (inputBrand != 'all' && inputPrice == 'all') window.location.href = 'table.php?brand=' + inputBrand;
        else window.location.href = 'table.php?brand=' + inputBrand + '&price=' + inputPrice;
    }
</script>