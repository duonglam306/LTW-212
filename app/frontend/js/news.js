$(document).on('submit','#addCommentpost', function(e) {
    e.preventDefault();
    var content = $("#txtCommentPost").val();
    var username = $("#userCommentPost").val();
    var id_post = $("#postCommentPost").val();
    console.log(content, username, id_post);
    $.ajax({
        url: "app/backend/news.php",
        method: "POST",
        data: {id_post: id_post, username: username, content: content},
        success: function(data) {
            location.reload();
        }
    });
});

function read_more() {
    var limit = $("#read_more_number_post").val();
    var id_post = $("#read_more_id_post").val();
    var incre_number = parseInt(limit) + 5;
    $("#read_more_number_post").val(incre_number);

    $.ajax({
        url: "app/backend/news_comment.php",
        method: "POST",
        data: {limit: incre_number, id_post: id_post},
        success: function(data) {
            document.getElementById("comment_list_post").innerHTML = data;
        }
    });
  }