$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        var userDevour = {
            devoured: true
        };

        // PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: userDevour
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: 0
        };

        // POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});