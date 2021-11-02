//Se establece el carrito para el dom y el carrito para el carrito visual
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//Se estable los eventos para 1- el boton de compra 2- el input de cantidad y 3- se modifica el valor de el texto del carrito con el largo de el carrito literal
$(".buy__Button").on("click", CartAdding);
$(".buy__Button--quantity").on("click", quantityValue);
$(".cartCountingItems").text(literalCart.length);

let quantity;


