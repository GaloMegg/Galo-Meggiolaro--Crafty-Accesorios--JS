//Every form of the proyect is in here, the reason is that they all use the same logic, and the all must be untouched. code imported thanks to Form Carry(Formcarry.com). The messages of the alerts are costums ones

//Index.html 
//line: 214
$(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert(
            "Genial, recibimos tus datos. Dentro de unas horas nos comunicaremos contigo."
          );
        } else {
          alert(
            "Uy, ¡algo malo paso! Intenta en otro momento..." + response.message
          );
        }
      },
    });
    $("#contactForm").trigger("reset");
  });
});

//quienessomos.html
//line: 119
$(function () {
  $("#letUsContact").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("¡En unos momentos nos estaremos comunicando!");
        } else {
          alert(
            "Uy, ¡algo malo paso! Intenta en otro momento..." + response.message
          );
        }
      },
    });
    $("#letUsContact").trigger("reset");
  });
});

//envios.html
//line: 172
$(function () {
  $("#dateForm").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("¡Te esperamos!");
        } else {
          alert(
            "Uy, ¡algo malo paso! Intenta en otro momento..." + response.message
          );
        }
      },
    });
    $("#dateForm").trigger("reset");
  });
});
