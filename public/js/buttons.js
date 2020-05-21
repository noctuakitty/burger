$(document).ready(function() {
$("#submitButton").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
        burger: $("#inputDefault").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            location.reload();
        }
    );
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
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
});