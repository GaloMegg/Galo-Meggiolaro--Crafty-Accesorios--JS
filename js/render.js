//Se llaman los carritos para ser renderizados y manipulados
cart = JSON.parse(localStorage.getItem("cart")) || [];
literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//Para cada item en el carrito cart se renderiza un child el cual es adjuntado al padre
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
//Se selecciona las imagenes de borrar items para añadirles los eventos clicks y poder eliminar los padres del dom y del carrito
let deleter = document.querySelectorAll(".cart__item--delete");
deleter.forEach((element) => {
  element.addEventListener("click", DeleteItems);
});
//Se renderiza el total inicial, luego cada actualizacion esta atada a las fnciones de eliminacion y re-renderizado
RenderingTotal(literalCart);
