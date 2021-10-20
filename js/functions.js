//APP.JS LINEA 5 Segun el disparador clickeado ejecuta la funcion CARTPUSHER del item que concuerda con la clase clickeada
function CartAdding(e) {
  console.log(e.target);
  if (e.target.classList.contains("aro")) {
    CartPusher(aro);
  } else if (e.target.classList.contains("collar")) {
    CartPusher(collar);
  } else if (e.target.classList.contains("anillo")) {
    CartPusher(anillo);
  } else if (e.target.classList.contains("cenicero")) {
    CartPusher(cenicero);
  }
}
//Funcion que dependiendo la cantidad designada pushea a los carritos el item de la funcion CARTADDING
function CartPusher(item) {
  for (let i = 0; i < quantitySelect; i++) {
    literalCart.push(item);
    let exist = cart.some((product) => product.id === item.id);
    if (exist) {
      item.cantidad++;
    } else {
      cart.push(item);
    }
  }
  cartCounter.textContent = literalCart.length;
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
//APP.JS LINEA 13 Designa la Cantidad de elementos a ser pusheado en la funcion CARTPUSHER
function QuantityAdding(e) {
  quantitySelect = e.target.value;
}
//RENDER.JS LINEA 9 renderiza los elementos del array que se le introduzcan
function Render(array) {
  array.forEach((element) => {
    renderedElement
      .querySelector(".cart__item--img")
      .setAttribute("src", `../cart/images/${element.nombre}.jpg`);
    renderedElement.querySelector(".name--variable").textContent =
      element.nombre;
    renderedElement.querySelector(".price--variable").textContent =
      element.precio;
    renderedElement.querySelector(".material--variable").textContent =
      element.material;
    renderedElement.querySelector(".quantity--variable").textContent =
      element.cantidad;
    renderedElement
      .querySelector(".cart__item--delete")
      .setAttribute("data-id", `${element.id}`);
    renderedElement
      .querySelector(".cart__item--delete")
      .setAttribute("data-quantity", `${element.cantidad}`);
    let clone = document.importNode(renderedElement, true);
    parentElementRender.appendChild(clone);
  });
}
//RENDER.JS LINEA 14 Se eliminan elementos del DOM y se eliminan los items del carrito
function DeleteRender(e) {
  e.target.parentElement.remove();
  DeleteCart(e.target.dataset.id);
  DeleteLiteralCart(e.target);
}
// Dentro de DELETERENDER Segun el ID del element eliminado se busca el index dentro del array y se elimina 1 posicion hacia adelante
function DeleteCart(item) {
  let deleteable = cart.findIndex((product) => {
    product.id == item;
  });
  cart.splice(deleteable, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
//Dentro de DELETERENDER Segun el ID del element se eliminara del carrito y la cantidad de espacios segun el valor que posea en su data.quantity
function DeleteLiteralCart(item) {
  let deleteable = literalCart.findIndex(
    (product) => product.id == item.dataset.id
  );
  let deleteableQuantity = item.dataset.quantity;
  literalCart.splice(deleteable, deleteableQuantity);
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
