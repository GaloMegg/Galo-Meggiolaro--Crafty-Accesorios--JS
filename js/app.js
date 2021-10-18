//Objetos predefinido sobre los productos que se venden en la pagina
const aro = {
  nombre: "aro",
  precio: 300,
  material: "Alambre y joya fantasía",
  id: 1,
};
const collar = {
  nombre: "collar",
  precio: 600,
  material: "Hilo chino y perlas fantasía",
  id: 2,
};
const anillo = {
  nombre: "anillo",
  precio: 400,
  material: "Arcilla polimerica",
  id: 3,
};
const cenicero = {
  nombre: "cenicero",
  precio: 1200,
  material: "Resina e-poxi",
  id: 4,
};
//Selecciono
//1) El numero que va al lado del carrito
//2)los botones de compra en todos los documentos
const cartCounter = document.querySelector(`.itemCounter`);
const buyButton = document.querySelectorAll(`.buy__Button`);
//Para cada buy__button añadi el evento click
buyButton.forEach((element) => {
  element.addEventListener("click", CartAdding);
});
//Defino en inicio del cart segun el storage o un array vacio
let cart = JSON.parse(localStorage.getItem("cart")) || [];
//le doy numero al
//1) Segun la longitud del arreglo
// cartCounter.textContent = cart.length;
//Segun el la clase que se hace target en el eventListener se pushea el objet que concuerda.
cartCounter.textContent = cart.length;
function CartAdding(e) {
  if (e.target.classList.contains("aro")) {
    cart.push(aro);
    //Se actualiza el numero del carrito, segun el largo del array
    cartCounter.textContent = cart.length;
    //Se sube el carrito al local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("collar")) {
    cart.push(collar);
    //Se actualiza el numero del carrito, segun el largo del array
    cartCounter.textContent = cart.length;
    //Se sube el carrito al local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("anillo")) {
    cart.push(anillo);
    //Se actualiza el numero del carrito, segun el largo del array
    cartCounter.textContent = cart.length;
    //Se sube el carrito al local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("cenicero")) {
    cart.push(cenicero);
    //Se actualiza el numero del carrito, segun el largo del array
    cartCounter.textContent = cart.length;
    //Se sube el carrito al local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
