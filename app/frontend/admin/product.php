<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1><?php echo strtoupper($type) ?> LIST</h1>
                </div>
            </div>
        </div>
    </section>
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 col-md-6 m-2">
                                    <button class="btn btn-add btn-primary" type="button">Add new <?php echo $type ?> product</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <table class="table table-bordered table-striped" id="table-product">
                                        <thead>
                                            <tr class="text-center">
                                                <th class="col-1">No.</th>
                                                <th class="col-3">Name</th>
                                                <th class="col-3">Description</th>
                                                <th class="col-2">Price</th>
                                                <th class="col-1">Brand</th>
                                                <th class="col-1">Quantity</th>
                                                <th class="col-2"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                            $host = "localhost";
                                            $user = "root";
                                            $pw = "";
                                            $database = "hola_house";
                                            $conn = mysqli_connect($host, $user, $pw, $database);
                                            if (!$conn) {
                                                die('Could not connect: ' . mysqli_error($conn));
                                            }
                                            $sql = "SELECT * FROM product WHERE type = '" . $type . "'";
                                            $result = mysqli_query($conn, $sql);
                                            if (mysqli_num_rows($result) > 0) {
                                                $i = 1;
                                                while ($row = mysqli_fetch_assoc($result)) {
                                                    echo "
                                                            <tr class='text-center'>
                                                                <td>" . $i . "</td>
                                                                <td>" . $row['name'] . "</td>
                                                                <td>" . $row['description'] . "</td>
                                                                <td>" . number_format($row['price']) . " VND</td>
                                                                <td>" . strtoupper($row['category']) . "</td>
                                                                <td>" . $row['amount'] . "</td>
                                                                <td>
                                                                    <button type='button' class='btn btn-success btn-view btn-xs mr-1' data-title='" . $row['name'] . "' data-content='" . $row['description'] . "' data-price='" . number_format($row['price']) . "' data-img='" . $row['image'] . "'><i class='fas fa-eye'></i></button>
                                                                    <button type='button' class='btn btn-primary btn-edit btn-xs mr-1' data-id ='" . $row['uid'] . "' data-name='" . $row['name'] . "' data-description='" . $row['description'] . "' data-price='" . $row['price'] . "' data-amount='" . $row['amount'] . "' data-brand='" . $row['category'] . "' data-image='" . $row['image'] . "'><i class='fas fa-edit'></i></button>
                                                                    <button type='button' class='btn btn-danger btn-delete btn-xs' data-id ='" . $row['uid'] . "' data-name='" . $row['name'] . "'><i class='fas fa-trash'></i></button>
                                                                </td>
                                                            </tr>";
                                                    $i++;
                                                }
                                            }
                                            mysqli_close($conn);
                                            ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<!-- View modal -->
<div class="modal fade" id="viewProductModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" name="title"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" style="margin-left:auto; margin-right:auto;">
                <div class="card" style="width: 25rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text h5" name="description"></p>
                        <p class="card-text h5" name="price"></p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Edit modal -->
<div class="modal fade" id="editProductModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Information</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="editProductForm">
                <div class="modal-body">

                    <input class="form-control" type="hidden" name="id" />
                    <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" type="text" name="name" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input class="form-control" type="text" name="description" />
                    </div>
                    <div class="form-group">
                        <label>Brand</label>
                        <select class="form-control select2" id="edit-brand-sel2" name="brand" style="width:100%;">
                            <?php
                            $host = "localhost";
                            $user = "root";
                            $pw = "";
                            $database = "hola_house";
                            $conn = mysqli_connect($host, $user, $pw, $database);
                            if (!$conn) {
                                die('Could not connect: ' . mysqli_error($conn));
                            }
                            $sql = "SELECT * FROM category WHERE type = '" . $type . "'";
                            $result = mysqli_query($conn, $sql);
                            if (mysqli_num_rows($result) > 0) {
                                while ($row = mysqli_fetch_assoc($result)) {
                                    echo "<option value='" . $row['name'] . "'>" . strtoupper($row['name']) . "</option>";
                                }
                            }
                            mysqli_close($conn);
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Amount</label>
                        <input class="form-control" type="number" name="amount" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input class="form-control" type="number" name="price" />
                    </div>
                    <div class="form-group">
                        <label>Image Link</label>
                        <input class="form-control" type="text" name="image" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Add modal -->
<div class="modal fade" id="addProductModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add <?php echo $type ?></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="addProductForm">
                <div class="modal-body">
                    <div class="form-group">
                        <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
                        <label>Name</label>
                        <input class="form-control" placeholder="<?php echo ucfirst($type) ?> Name" type="text" name="name" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input class="form-control" placeholder="<?php echo ucfirst($type) ?> Description" type="text" name="description" />
                    </div>
                    <div class="form-group">
                        <label>Brand</label>
                        <select class="form-control select2" id="add-brand-sel2" name="brand" style="width:100%;">
                            <?php
                            $host = "localhost";
                            $user = "root";
                            $pw = "";
                            $database = "hola_house";
                            $conn = mysqli_connect($host, $user, $pw, $database);
                            if (!$conn) {
                                die('Could not connect: ' . mysqli_error($conn));
                            }
                            $sql = "SELECT * FROM category WHERE type = '" . $type . "'";
                            $result = mysqli_query($conn, $sql);
                            if (mysqli_num_rows($result) > 0) {
                                while ($row = mysqli_fetch_assoc($result)) {
                                    echo "<option value='" . $row['name'] . "'>" . strtoupper($row['name']) . "</option>";
                                }
                            }
                            mysqli_close($conn);
                            ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Amount</label>
                        <input class="form-control" placeholder="Available amount" type="number" name="amount" />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input class="form-control" placeholder="<?php echo ucfirst($type) ?> Price" type="number" name="price" />
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input class="form-control" placeholder="Image Link" type="text" name="image" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">OK</button>
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Delete modal -->
<div class="modal fade" id="deleteProductModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Delete <?php echo ucfirst($type) ?></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="deleteProductForm">
                <div class="modal-body">
                    <input class="form-control" type="hidden" name="id" />
                    <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
                    <p></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    <button type="submit" class="btn btn-danger">Confirm</button>
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->