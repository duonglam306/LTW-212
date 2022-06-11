
$("#table-product").DataTable({
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    // paging: false,
    // language: {
    //     url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    // },
    // buttons: [
    //     {
    //         text: "Thêm mới",
    //         action: function (e, dt, node, config) {
    //             window.location.href = "/faculty/add";
    //         },
    //     },
    // ],
});

//View Product jquery
$(document).on("click", ".btn-view", function (e) {
    var title = $(this).data("title");
    var content = "Description: " + $(this).data("content");
    var price = "Price: " + $(this).data("price") + " VND";
    var img = $(this).data("img");
    $("#viewProductModal .modal-title").text(title);
    $("#viewProductModal .modal-body .card img").attr("src", img);
    $("#viewProductModal .modal-body p[name='description']").text(content);
    $("#viewProductModal .modal-body p[name='price']").text(price);
    $("#viewProductModal").modal("show");
});

//Edit Product jquery
$("#edit-brand-sel2").select2({
    theme: "bootstrap4",
    dropdownParent: $("#editProductModal"),
    allowClear: false,
});

$(document).on("click", ".btn-edit", function (e) {
    var id = $(this).data("id");
    var name = $(this).data("name");
    var description = $(this).data("description");
    var price = $(this).data("price");
    var amount = $(this).data("amount");
    var brand = $(this).data("brand");
    var image = $(this).data("image");
    $("#editProductModal input[name='id']").val(id);
    $("#editProductModal input[name='name']").val(name);
    $("#editProductModal input[name='description']").val(description);
    $("#editProductModal input[name='price']").val(price);
    $("#editProductModal input[name='amount']").val(amount);
    $("#editProductModal input[name='image']").val(image);
    $("#edit-brand-sel2").val(brand);
    $("#edit-brand-sel2").trigger("change");
    $("#editProductModal").modal("show");
});

$(document).on("submit", "#editProductForm", function (e) {
    e.preventDefault();
    var id = $("#editProductForm input[name='id']").val();
    var name = $("#editProductForm input[name='name']").val();
    var description = $("#editProductForm input[name='description']").val();
    var price = $("#editProductForm input[name='price']").val();
    var amount = $("#editProductForm input[name='amount']").val();
    var image = $("#editProductForm input[name='image']").val();
    var brand = $("#edit-brand-sel2").val();
    var type = $("#editProductForm input[name='type']").val();
    $.ajax({
        url: "app/backend/admin/product/edit.php",
        method: "POST",
        data: {
            id: id,
            name: name,
            description: description,
            amount: amount,
            price: price,
            brand: brand,
            image: image,
            type: type,
        },
        success: function (data) {
            $("#editProductForm")[0].reset();
            $("#editProductModal").modal("hide");
            Swal.fire({
                title: "Notification",
                text: data,
                icon: data == "Update successfully!" ? "success" : "error",
                didClose: () =>
                    (window.location.href = "admin_" + type + ".php"),
            });
        },
    });
});

//Add Product jquery
$(document).on("click", ".btn-add", function (e) {
    $("#addProductModal").modal("show");
});

$("#add-brand-sel2").select2({
    theme: "bootstrap4",
    dropdownParent: $("#addProductModal"),
    allowClear: false,
});

$(document).on("submit", "#addProductForm", function (e) {
    e.preventDefault();
    var name = $("#addProductForm input[name='name']").val();
    var description = $("#addProductForm input[name='description']").val();
    var price = $("#addProductForm input[name='price']").val();
    var amount = $("#addProductForm input[name='amount']").val();
    var image = $("#addProductForm input[name='image']").val();
    var type = $("#addProductForm input[name='type']").val();
    var brand = $("#add-brand-sel2").val();
    $.ajax({
        url: "app/backend/admin/product/add.php",
        method: "POST",
        data: {
            name: name,
            description: description,
            amount: amount,
            price: price,
            brand: brand,
            image: image,
            type: type,
        },
        success: function (data) {
            $("#addProductForm")[0].reset();
            $("#addProductModal").modal("hide");
            Swal.fire({
                title: "Notification",
                text: data,
                icon: data == "Add successfully!" ? "success" : "error",
                didClose: () =>
                    (window.location.href = "admin_" + type + ".php"),
            });
        },
    });
});

//Delete Product jquery
$(document).on("click", ".btn-delete", function (e) {
    var id = $(this).data("id");
    var content =
        "Are you sure you want to delete '" +
        $(this).data("name") +
        "' from products?";
    $("#deleteProductModal .modal-body p").text(content);
    $("#deleteProductModal input[name='id']").val(id);
    $("#deleteProductModal").modal("show");
});

$(document).on("submit", "#deleteProductForm", function (e) {
    e.preventDefault();
    var id = $("#deleteProductForm input[name='id']").val();
    var type = $("#deleteProductForm input[name='type']").val();
    $.ajax({
        url: "app/backend/admin/product/delete.php",
        method: "POST",
        data: { id: id, type: type },
        success: function (data) {
            $("#deleteProductForm")[0].reset();
            $("#deleteProductModal").modal("hide");
            Swal.fire({
                title: "Notification",
                text: data,
                icon: data == "Delete successfully!" ? "success" : "error",
                didClose: () =>
                    (window.location.href = "admin_" + type + ".php"),
            });
        },
    });
});
