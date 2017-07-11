$(document.body).on('click', '.add', function() {

     $(this).addClass('disabled');

    $.ajax({
        url: '/add/product',
        type: 'PUT',
        data: {
            id: this.id
        },
        success: function(response) {
            if (response === "fail") {
                console.log("Save FAILED");
            }
            else {
                console.log(this.id);
            }
        }
    });

});

$(document.body).on('click', '.delete', function() {
    // alert("add button");
    // alert(this.id);
    $.ajax({
        url: '/delete/product',
        type: 'PUT',
        data: {
            id: this.id
        },
        success: function(response) {
            if (response === "fail") {
                console.log("Save FAILED");
            }
            else {
                console.log(this.id);
            }
        }
    });

});