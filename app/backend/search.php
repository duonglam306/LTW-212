<?php
    $key = $_POST['key'];
    $tag = $_POST['tag'];
    $type_search = $_POST['typeSearch'];
    $host = "localhost";
    $user = "root";
    $pw = "";
    $database = "hola_house";
    $conn = mysqli_connect($host,$user,$pw,$database);
    if (!$conn) {
        die('Could not connect: ' . mysqli_error($conn));
    }
    if ($type_search == 'product') {
        if ($tag == 'table') {
            $sql = "SELECT * FROM product WHERE type = 'table' AND (name LIKE '%$key%' OR description LIKE '%$key%')";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                while ($row = mysqli_fetch_assoc($result)){
                    echo "
                    <div class='list-group-item'>
                        <div class='row'>
                            <div class='col-auto'>
                                <img class='img-fluid' src='".$row['image']."' alt='Photo' style='height: 180px; width: 180px;'>
                            </div>
                            <div class='col px-4'>
                                <div>
                                    <a href='product.php?id=".$row['uid']."'><h3>".$row['name']."</h3></a>
                                    <p style='color:gray;display:inline;'><small><i class='fas fa-tag'></i> &nbsp".strtoupper($row["type"])."&nbsp</p>
                                    <p class='mb-0 mt-1'>Description: ".$row['description']."</p>
                                </div>
                            </div>
                        </div>
                    </div>";
                }
            }
            else echo "There are no results, please try another keyword";
        }
        else if ($tag == 'bed') {
            $sql = "SELECT * FROM product WHERE type = 'bed' AND (name LIKE '%$key%' OR description LIKE '%$key%')";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                while ($row = mysqli_fetch_assoc($result)){
                    echo "
                    <div class='list-group-item'>
                        <div class='row'>
                            <div class='col-auto'>
                                <img class='img-fluid' src='".$row['image']."' alt='Photo' style='height: 180px; width: 180px;'>
                            </div>
                            <div class='col px-4'>
                                <div>
                                    <a href='product.php?id=".$row['uid']."'><h3>".$row['name']."</h3></a>
                                    <p style='color:gray;display:inline;'><small><i class='fas fa-tag'></i> &nbsp".strtoupper($row["type"])."&nbsp</p>
                                    <p class='mb-0 mt-1'>Description: ".$row['description']."</p>
                                </div>
                            </div>
                        </div>
                    </div>";
                }
            }
            else echo "There are no results, please try another keyword";
        }
        else if ($tag == 'chair') {
            $sql = "SELECT * FROM product WHERE type = 'chair' AND (name LIKE '%$key%' OR description LIKE '%$key%')";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                while ($row = mysqli_fetch_assoc($result)){
                    echo "
                    <div class='list-group-item'>
                        <div class='row'>
                            <div class='col-auto'>
                                <img class='img-fluid' src='".$row['image']."' alt='Photo' style='height: 180px; width: 180px;'>
                            </div>
                            <div class='col px-4'>
                                <div>
                                    <a href='product.php?id=".$row['uid']."'><h3>".$row['name']."</h3></a>
                                    <p style='color:gray;display:inline;'><small><i class='fas fa-tag'></i> &nbsp".strtoupper($row["type"])."&nbsp</p>
                                    <p class='mb-0 mt-1'>Description: ".$row['description']."</p>
                                </div>
                            </div>
                        </div>
                    </div>";
                }
            }
            else echo "There are no results, please try another keyword";
        }
        else if ($tag == 'lamp') {
            $sql = "SELECT * FROM product WHERE type = 'lamp' AND (name LIKE '%$key%' OR description LIKE '%$key%')";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result) > 0){
                while ($row = mysqli_fetch_assoc($result)){
                    echo "
                    <div class='list-group-item'>
                        <div class='row'>
                            <div class='col-auto'>
                                <img class='img-fluid' src='".$row['image']."' alt='Photo' style='height: 180px; width: 180px;'>
                            </div>
                            <div class='col px-4'>
                                <div>
                                    <a href='product.php?id=".$row['uid']."'><h3>".$row['name']."</h3></a>
                                    <p style='color:gray;display:inline;'><small><i class='fas fa-tag'></i> &nbsp".strtoupper($row["type"])."&nbsp</p>
                                    <p class='mb-0 mt-1'>Description: ".$row['description']."</p>
                                </div>
                            </div>
                        </div>
                    </div>";
                }
            }
            else echo "There are no results, please try another keyword";
        }
    }
    else {
        $sql = "SELECT * FROM post WHERE category LIKE '%$tag%' AND (title LIKE '%$key%' OR slug LIKE '%$key%' OR content LIKE '%$key%')";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) > 0){
            while ($row = mysqli_fetch_assoc($result)){
                echo "
                <div class='list-group-item'>
                    <div class='row'>
                        <div class='col-auto'>
                            <img class='img-fluid' src='".$row['image']."' alt='Photo' style='height: 180px; width: 180px;'>
                        </div>
                        <div class='col px-4'>
                            <div>
                                <a href='news.php?".$row['slug']."'><h3>".$row['summary']."</h3></a>
                                <div style='color:gray;display:inline;'><small><i class='fas fa-newspaper'></i> &nbsp NEWS</div><br>
                                <p style='color:gray;display:inline; width:400px;'><small><i class='fas fa-user'></i> &nbsp Content - ".$row["author"]."&nbsp</p>
                                <span style='color:gray;display:inline;'> <i class='fas fa-clock'></i> &nbsp ".substr($row["date"], 0, 10)."</small></span>
                            </div>
                        </div>
                    </div>
                </div>";
            }
        }
        else echo "There are no results, please try another keyword";
    }
?>