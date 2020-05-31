$(document).ready(function () {
    $("#submitButton").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger: $("#inputDefault").val().trim()
        };
        console.log(newBurger);
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
$(document, ".devourBurger").on("click", function (event) {
    event.preventDefault();
    var id = $(event.target).data("id");
    console.log(id)
    var devouredBurg = {
        devoured: true
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurg
    }).then(
        function () {
            location.reload();
        }
    );
});