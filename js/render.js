//Se trae el carrito actualizado de la compra
cart = JSON.parse(localStorage.getItem("cart"));
//Se Selecciona el padre donde se inserta el hijo y el nodo a clonar
const parentElementRender = document.querySelector(".cart__item");
const renderedElement = document.querySelector(".cart__item--template").content;
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//Se renderiza la imagen clonando un nodo
if (renderedElement) {
  Render(cart);
  //Se designa la imagen con clase --delete
  const deleteRenderIcon = document.querySelectorAll(".cart__item--delete");
  deleteRenderIcon.forEach((product) =>
    //para cada imagen con clase --delete se da la funcion controladora que elimina del dom, elimina delos arrays y actualiza lo storage
    product.addEventListener("click", DeleteRender)
  );
}
