<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1><?php echo strtoupper($type) ?> TYPE LIST</h1>
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
                                <div class="col-12">
                                    <button class="btn btn-add btn-primary" type="button">Add new type</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <table class="table table-bordered table-striped" id="table-brand">
                                        <thead>
                                            <tr class="text-center">
                                                <th>No.</th>
                                                <th>Type Name</th>
                                                <th>Amount</th>
                                                <th></th>
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
                                            $sql1 = "SELECT * FROM category WHERE type = '" . $type . "'";
                                            $result1 = mysqli_query($conn, $sql1);
                                            if (mysqli_num_rows($result1) > 0) {
                                                $i = 1;
                                                while ($row1 = mysqli_fetch_assoc($result1)) {
                                                    $sql2 = "SELECT * FROM product WHERE category = '" . $row1['name'] . "';";
                                                    $result2 = mysqli_query($conn, $sql2);
                                                    echo "
                                                            <tr class='text-center'>
                                                                <td>" . $i . "</td>
                                                                <td>" . strtoupper($row1['name']) . "</td>
                                                                <td>" . mysqli_num_rows($result2) . "</td>
                                                                <td>
                                                                    <button type='button' class='btn btn-success btn-view btn-xs mr-1' data-brand='" . $row1['name'] . "'><i class='fas fa-eye'></i></button>
                                                                    <button type='button' class='btn btn-primary btn-edit btn-xs mr-1' data-id='" . $row1['id'] . "' data-name='" . $row1['name'] . "'><i class='fas fa-edit'></i></button>
                                                                    <button type='button' class='btn btn-danger btn-delete btn-xs' data-id='" . $row1['id'] . "' data-name='" . $row1['name'] . "'><i class='fas fa-trash'></i></button>
                                                                </td>
                                                            </tr>";
                                                    $i++;
                                                }
                                            }
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

<!-- Add modal -->
<div class="modal fade" id="addBrandModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Add Type</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="addBrandForm">
                <div class="modal-body">
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" placeholder="Type Name" type="text" name="name" />
                        <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
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

<!-- View modal -->
<div class="modal fade" id="viewBrandModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ul class="list-unstyled">
                </ul>
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
<div class="modal fade" id="editBrandModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Edit Information</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="editBrandForm">
                <div class="modal-body">
                    <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
                    <div class="form-group">
                        <input class="form-control" type="hidden" name="id" />
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" placeholder="Type Name" type="text" name="name" />
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

<!-- Delete modal -->
<div class="modal fade" id="deleteBrandModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Delete Type</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="deleteBrandForm">
                <input class="form-control" type="hidden" name="type" value='<?php echo $type ?>' />
                <div class="modal-body">
                    <input class="form-control" type="hidden" name="id" />
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