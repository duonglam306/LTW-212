$(document).ready(function() {
    $("#tag-sel2").select2({
        theme: "bootstrap4",
    });
});


$(document).on('submit','#searchForm', function(e) {
    e.preventDefault();
    var key = $("#searchForm input[name='key']").val();
    var tag = $("#product-select").val();
    var typeSearch = $("#type-search").val();
    if (key != "") {
        $.ajax({
            url: "app/backend/search.php",
            method: "POST",
            data: {key: key, tag: tag, typeSearch: typeSearch},
            success: function(data) {
                $('#searchResult').html('<div class="list-group-item">' + data + '</div>');
            }
        });
    }
});

$('#searchModal').on('hidden.bs.modal', function () {
    $('#searchResult').html('');
})