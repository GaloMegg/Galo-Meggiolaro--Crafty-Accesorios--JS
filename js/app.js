//Selecciono
//1) El numero que va al lado del carrito
//2)los botones de compra en todos los documentos
const cartCounter = document.querySelector(`.itemCounter`);
const buyButton = document.querySelectorAll(`.buyButton__Box`);
//Para cada buy__button añadi el evento click
buyButton.forEach((element) => {
  element.addEventListener("click", CartAdding);
});

//Defino en inicio del cart segun el storage o un array vacio
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//Segun el la clase que se hace target en el eventListener se pushea el objet que concuerda.
if (cartCounter) {
  cartCounter.textContent = cart.length;
}
let quantity = document.querySelector(".buy__Button--quantity");
if (quantity) {
  quantity.addEventListener("input", QuantityAdding);
  function QuantityAdding(e) {
    quantity = e.target.value;
  }
}
