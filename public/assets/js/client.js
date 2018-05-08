// Make sure we wait to attach our handlers until the DOM is fully loaded.
//So, need for a listener to be attached that looks for true devour statuses (a la sleepy with the cats)
//and if devour is true, then display them in a separate column.
$(function () {
  $(".eat-burger").on("click", function (event) {
    var id = $(this).data("id");
    var devouredStatus = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredStatus
    }).then(
      function (result) {
        console.log("Devoured burger with " + id + ". New devoured status is " + result);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var burger_name = {
      name: $("#addBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: burger_name
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
