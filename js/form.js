$(function(){
  $("#contactForm").submit(function(e){
      e.preventDefault();
      var href = $(this).attr("action");
      $.ajax({
          type: "POST",
          dataType: "json",
          url: href,
          data: $(this).serialize(),
          success: function(response){
              if(response.status == "success"){
                  alert("Genial, recibimos tus datos. Dentro de unas horas nos comunicaremos contigo.");
              }else{
                  alert("Uy, ¡algo malo paso! Intenta en otro momento..." + response.message);
              }
          }
      });
  });
});

$(function(){
  $("#dateForm").submit(function(e){
      e.preventDefault();
      var href = $(this).attr("action");
      $.ajax({
          type: "POST",
          dataType: "json",
          url: href,
          data: $(this).serialize(),
          success: function(response){
              if(response.status == "success"){
                  alert("¡Te esperamos!");
              }else{
                  alert("Uy, ¡algo malo paso! Intenta en otro momento..." + response.message);
              }
          }
      });
  });
});