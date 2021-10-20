//Se designan los botones como disparadores de eventos si existen los botones en la pagina
const buyButton = document.querySelector(".buy__Button");
if (buyButton) {
  //La funcion controladora se ve cndicionada a la clase del boton en la que designa el objeto a comprar
  buyButton.addEventListener("click", CartAdding);
}
//Se designa el Contador visual del carrito, y se designa la cantidad de elementos a comprar
const cartCounter = document.querySelector(".cartCountingItems");
const quantitySelectSelector = document.querySelector(".buy__Button--quantity");
let quantitySelect;
if (quantitySelectSelector) {
  //La funcion controladora añade cantidad al carrito visual, y modifica la cantidad para que se vea reflejada en el dom
  quantitySelectSelector.addEventListener("change", QuantityAdding);
}
//Se establece el carrito para el dom y el carrito para el carrito visual
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//Al carrito visual de le da la cantidad de elementos
if (cartCounter) {
  cartCounter.textContent = literalCart.length;
}
