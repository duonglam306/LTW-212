<?php
    $limit = $_POST['limit'];
    $id_post = $_POST['id_post'];

    $host = "localhost";
    $user = "root";
    $pw = "";
    $database = "hola_house";
    $conn = mysqli_connect($host,$user,$pw,$database);
    if (!$conn) {
        die('Could not connect: ' . mysqli_error($conn));
    }
    // SELECT * FROM comment_post JOIN users ON comment_post.username = users.username WHERE id_post = $post_id LIMIT 5;
    $sql = "SELECT * FROM comment_post JOIN users ON comment_post.username = users.username WHERE id_post = ".$id_post." ORDER BY date DESC LIMIT ".$limit."";
    $result = mysqli_query($conn, $sql);
    if(mysqli_num_rows($result) > 0){
        while ($row2 = mysqli_fetch_assoc($result)){
            echo '                                    <hr>
            <div class="box-content">
                <div class="row">
                    <div class="col-3">
                    <div class="d-flex justify-content-center">
                    <img id="cmt-user-avatar" src="'.$row2["image"].'" alt="" style="width: 70px; height: 70px" alt="" class="rounded-circle border mb-2">
                    </div>
                        <p class="text-center" style="margin-left: 10px;">'.$row2["name"].'</p>
                    </div>
                    <div class="col-9">
                        <div class="input clearfix">
                        <p><small>'.substr($row2["date"],0, 10).'</small></p> 
                    <p>'.$row2["content"].'</p>
                        </div>
                    </div>
                </div>
            </div>   ';
        }
    }
    $conn->close();
?>