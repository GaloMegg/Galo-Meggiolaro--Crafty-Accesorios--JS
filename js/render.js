cart = JSON.parse(localStorage.getItem("cart")) || [];
literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];

cart.forEach((element) => {
  $(".cart__item").append(`
    <div class="cart__item--try" data-id="${element.id}">
              <img alt="" class="cart__item--img" src=" ../cart/images/${element.nombre}.jpg">
              <p class="cart__item--name">Nombre: ${element.nombre}</p>
              <p class="cart__item--price">Precio: ${element.precio}</p>
              <p class="cart__item--material">Material: ${element.material}</p>
              <p class="cart__item--quantity">Cantidad: ${element.cantidad}</p>
              <img src="images/x.svg" alt="" class="cart__item--delete" data-quantity = "${element.cantidad}" data-id=${element.id}>
          </div>`);
});

let deleter = document.querySelectorAll(".cart__item--delete");
deleter.forEach((element) => {
  element.addEventListener("click", DeleteItems);
});
function DeleteItems(e) {
  e.target.parentElement.remove();
  DeleteCart(e.target.dataset.id);
  DeleteLiteralCart(e.target.dataset.id, e.target.dataset.quantity);
}

function DeleteCart(item) {
  let deleteable = cart.findIndex((product) => product.id == item);
  cart.splice(deleteable, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
function DeleteLiteralCart(item, quantity) {
  let deleteable = literalCart.findIndex((product) => product.id == item);
  literalCart.splice(deleteable, quantity);
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
