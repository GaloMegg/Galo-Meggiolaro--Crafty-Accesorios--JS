$(function () {
  $(".submitButton").submit(function (e) {
    e.preventDefault();
    let href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
            console.log (response)
          $(".fieldSet").trigger("reset");
        } else {
          alert("An error occured: " + response.message);
        }
      },
    });
  });
});
