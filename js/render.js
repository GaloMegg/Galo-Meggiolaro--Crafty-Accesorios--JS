//Selecciono
//1) El template para renderizar las cards de los objetos en la pagina cart
//2)El padre donde seran insertadas las Cards(3)
const renderingCart = document.querySelector(`#cart__item--template`).content;
const parentRenderingCart = document.querySelector(".cart__item");

//Para cara producto en el carrito se renderiza:
cart.forEach((product) => {
  //El data ID con el que sera identificado el objeto
  renderingCart
    .querySelector(`.cart__item--try`)
    .setAttribute(`data-id`, `${product.id}`);
  //La imagen del objeto
  renderingCart
    .querySelector(".cart__item--img")
    .setAttribute("src", `../cart/images/${product.nombre}.jpg`);
  //El nombre del prducto
  renderingCart.querySelector(".name--variable").textContent = product.nombre;
  //El precio del producto
  renderingCart.querySelector(".price--variable").textContent = product.precio;
  //El material que lo compone
  renderingCart.querySelector(".material--variable").textContent =
    product.material;
  //Se clona la el template con su contenido
  let card = document.importNode(renderingCart, true);
  //Se le adjunto un hijo al div padre
  parentRenderingCart.appendChild(card);
});

//Se selecciona el div contenedor de los productos con sus imagenes para retirarlos de array card, y del renderizao
const deleteItem = document.querySelectorAll(`.cart`);
//para cada elemento del nodelist se le asigna un evento de click
deleteItem.forEach((element) => {
  element.addEventListener("click", Deleting);
});

function Deleting(e) {
  //Si el evento posee la clase (...)--delete
  if (e.target.classList.contains("cart__item--delete")) {
    //Se remueve el padre del DOM (y el hijo)
    e.target.parentElement.remove();
    //Definimos una variable con el valor actualizable del index donde esta el elemento a borrar. (segun el ID dado)
    let deleted = cart.findIndex(
      (product) => product.id == e.target.parentElement.dataset.id
    );
    //Se retira del array del carrito el valor del index(el poducto seleccionado)
    cart.splice(deleted, 1);
    //Se actualiza el storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
