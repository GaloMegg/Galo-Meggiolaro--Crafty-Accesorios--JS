//Se establece el carrito para el dom y el carrito para el carrito visual
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//Se estable los eventos para 1- el boton de compra 2- el input de cantidad y 3- se modifica el valor de el texto del carrito con el largo de el carrito literal
$(".buy__Button").on("click", CartAdding);
$(".buy__Button--quantity").on("click", quantityValue);
$(".cartCountingItems").text(literalCart.length);

let quantity;
$.ajax({
  url: `https://api.mercadolibre.com/users/1645198831423950
  /shipping_options?zip_code=1113&quantity=2`,
  method: "GET",
  datatype: "JSON",
  success: function (data) {
    console.log(data);
  },
  error: function (error) {
    console.log(`12121`);
  },
});
