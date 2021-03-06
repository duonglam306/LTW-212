    <!-- Start Top Nav -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top" style="font-size: 20pt !important;">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <?php
                if (isset($_COOKIE['username']) == true) echo "
                        <div class='d-flex align-items-center'>
                            <span class='navbar-sm-brand text-warning text-decoration-none'> Welcome, " . $_COOKIE['username'] . "</span>
                        </div>";
                ?>
                <div>
                    <?php
                    if (isset($_COOKIE['username']) == false) echo "
                            <a class='nav-icon d-none d-lg-inline px-3 text-warning' href='login.php' style='text-decoration:none;'>
                                <i class='fa fa-fw fa-sign-in-alt mr-2'></i>
                                <span>Login<span>
                            </a>
                            <a class='nav-icon d-none d-lg-inline text-warning' href='register.php' style='text-decoration:none;'>
                                <i class='fa fa-fw fa-user mr-2'></i>
                                <span>Create account<span>
                            </a>";
                    else echo "
                                <button class='nav-icon d-none d-lg-inline px-3 btn-warning' onclick='logout()'>
                                    <i class='fa fa-fw text-white fa-sign-out-alt mr-2'></i>
                                    <span class= 'text-white'>Logout<span>
                                </button>";
                    ?>
                </div>
            </div>
        </div>
    </nav>
    <!-- Close Top Nav -->


    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a class="navbar-brand" href="index.php">
                <div class="d-flex justify-content-center">
                    <img src="img\logo.png" alt="logo_hola_house" class="d-block w-50">
                </div>
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.php">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="table.php">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.php">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.php">News</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-fill d-lg-flex d-none justify-content-center">
                    <div class="input-group col-10">
                        <select class="form-select" name="search" id="option-search" onchange="handleSelectSearch()">
                            <option selected value="all">Please choose kind to search</option>
                            <option value="product">Product</option>
                            <option value="news">News</option>
                        </select>
                        <button class="btn btn-warning mb-0" id="submit-select-search" disabled data-bs-toggle="modal" data-bs-target="#searchModal" style="cursor: pointer">
                            <i class="fa fa-fw fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <select class="form-select" name="search" id="option-search" onchange="handleSelectSearch()">
                                <option selected value="all">Please choose kind to search</option>
                                <option value="product">Product</option>
                                <option value="news">News</option>
                            </select>
                            <button class="btn btn-warning mb-0" id="submit-select-search" disabled data-bs-toggle="modal" data-bs-target="#searchModal" style="cursor: pointer">
                                <i class="fa fa-fw fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <?php if (isset($_COOKIE['username'])) {
                        echo
                        '<a href = "info.php">
                                    <i class="fa fa-fw fa-user text-dark mr-2"></i>
                                </a>
                                <a href="cart.php">
                                    <i class="fa fa-fw fa-cart-arrow-down text-dark"></i>
                                    <span id="cart" class="position-absolute top-10 left-100 translate-middle badge rounded-pill bg-light text-dark">' . (isset($_SESSION["cart"]) ? count($_SESSION["cart"]) : 0) . '</span>
                                </a>';
                    }
                    ?>
                </div>
            </div>

        </div>
    </nav>
    <!-- Close Header -->


    <!-- Search modal -->
    <div class="modal fade" id="searchModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="search-modal-title" name="title"></h4>
                    <button type="button" class="btn btn-default btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" style="margin-left:auto; margin-right:auto;">
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <form id="searchForm">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-6">
                                            <label class="fw-bold" id="search-type-label"></label>
                                        </div>
                                        <div class="col-6">
                                            <select id="product-select" class="form-select select2" name="tag" style="width:100%;">
                                                <option value="table">Table</option>
                                                <option value="chair">Chair</option>
                                                <option value="bed">Bed</option>
                                                <option value="lamp">Lamp</option>
                                            </select>
                                            <input class="d-none" type="text" id="type-search" name="typeSearch">
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group input-group-lg">
                                    <input type="search" name="key" class="form-control form-control-lg mt-3" placeholder="Type your keywords here" size="100">
                                    <div class="input-group-append mt-3">
                                        <button type="submit" class="btn btn-lg btn-warning">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12" id="searchResult">
                        </div>
                    </div>
                </div>
                <div class="modal-footer"></div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>


    <?php
    if (isset($_COOKIE['username'])) echo "
        <script>
            function logout() {
                sessionStorage.removeItem('" . $_COOKIE['username'] . "');
                document.cookie.split(';').forEach(function(c) { document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/'); });
                window.location.href = 'index.php';
            }
        </script>";
    ?>
    <script type="text/javascript">
        function handleSelectSearch(e) {
            let inputSearchBar = document.getElementById("option-search").value;
            if (inputSearchBar !== 'all') {
                document.getElementById("submit-select-search").disabled = false;
                if (inputSearchBar === "product") {
                    document.getElementById("search-modal-title").innerHTML = "Search product";
                    document.getElementById("search-type-label").innerHTML = "Please select the type of product you want to search";
                    document.getElementById("type-search").value = "product";
                } else {
                    document.getElementById("search-modal-title").innerHTML = "Search news";
                    document.getElementById("search-type-label").innerHTML = "Please select the content type of the news you want to search";
                    document.getElementById("type-search").value = "news";
                }
            } else {
                document.getElementById("submit-select-search").disabled = true;
            }
        }
    </script>