//Comment Datatable
$("#table-comment").DataTable({
    responsive: true,
    // lengthChange: false,
    autoWidth: false,
    columnDefs: [
        {"className": "dt-center", "targets": "_all"}
    ],
});

//View comment jquery
$(document).on('click', '.btn-view-cmt-post',function(e){  
    var id = $(this).data("id");
    var title = "Comments on " + $(this).data("name");
    $("#viewCommentPostModal .modal-title").text(title);
    $.ajax({
        url: "app/backend/admin/comments/post_view.php",
        method: "POST",
        data: {id: id},
        success: function(data) {
            $('#viewCommentPostModal .modal-body').html(data);
            $("#viewCommentPostModal").modal("show");
        }
    });
});

//Change status jquery
function read(id) {
    
    var readTitle = "#readCheckboxPost" + id;
    var blockTitle = "#blockCheckboxPost" + id;
    var status;
    if ($(readTitle).is(':checked')) {
        status = "read";
        $(blockTitle).prop('checked', false); 
    }
    else {
        status = "unread";
    }
    var title = "#status" + id;
    console.log(id, status)
    $.ajax({
        url: "app/backend/admin/comments/post_status.php",
        method: "POST",
        data: {id: id, status: status},
        success: function(data) {
            if (data == "read") {
                $(title).html("<span class='right badge badge-success'>Read</span>");
                window.location.reload();
            }
            else if (data == "unread") {
                $(title).html("<span class='right badge badge-primary'>New</span>");
                window.location.reload();
            }
            else console.log(data);
        }
    });
}

function block(id) {
    var blockTitle = "#blockCheckboxPost" + id;
    var readTitle = "#readCheckboxPost" + id;
    var status;
    if ($(blockTitle).is(':checked')) {
        status = "block";
        $(readTitle).prop('checked', false); 
    }
    else {
        status = "read";
    }
    var title = "#status" + id;
    $.ajax({
        url: "app/backend/admin/comments/post_status.php",
        method: "POST",
        data: {id: id, status: status},
        success: function(data) {
            if (data == "block") {
                $(title).html("<span class='right badge badge-danger'>Blocked</span>");
                window.location.reload();
            }
            else if (data == "read") {
                $(readTitle).prop('checked', true); 
                $(title).html("<span class='right badge badge-success'>Read</span>");
                window.location.reload();
            }
            else console.log(data);
        }
    });
}