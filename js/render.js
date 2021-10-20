cart = JSON.parse(localStorage.getItem("cart"));
const parentElementRender = document.querySelector(".cart__item");
const renderedElement = document.querySelector(".cart__item--template").content;
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];

if (renderedElement) {
  Render(cart);
}
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

const deleteRenderIcon = document.querySelectorAll(".cart__item--delete");
deleteRenderIcon.forEach((product) =>
  product.addEventListener("click", DeleteRender)
);

function DeleteRender(e) {
  e.target.parentElement.remove();
  DeleteCart(e.target.dataset.id);
  DeleteLiteralCart(e.target);
}

function DeleteCart(item) {
  let deleteable = cart.findIndex((product) => {
    product.id == item;
  });
  cart.splice(deleteable, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function DeleteLiteralCart(item) {
  let deleteable = literalCart.findIndex(
    (product) => product.id == item.dataset.id
  );
  let deleteableQuantity = item.dataset.quantity;
  literalCart.splice(deleteable, deleteableQuantity);
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
