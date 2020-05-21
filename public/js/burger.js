$.get("/api/all",function(data){
    console.log("anything")
    console.log(data)
    if (data.length!==0) {
    for (var i=0;i < data.length;i++) {
       
        if (data.devoured===false) {
            var burgerDiv = $("<div>").addClass("row burger")
            var titleDiv = $("<div>").addClass("col-9").append(data.burgerName)
            var buttonDiv = $("<div>").addClass("col-3 btn btn-primary")
            $("#devoured").append(burgerDiv).append(titleDiv).append(buttonDiv)
        }
    }
}
});