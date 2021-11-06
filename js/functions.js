//APP.JS LINEA 5 Se le asigna a todos los botones de compra el evento click y gracias a esta funcion se diferencia cual es el producto a comprar. y dependiendo de si poseen o no una clase identificadora se pushea.
function CartAdding() {
  if ($(".buy__Button").hasClass("aro")) {
    PushElements(aro);
  } else if ($(".buy__Button").hasClass("anillo")) {
    PushElements(anillo);
  } else if ($(".buy__Button").hasClass("collar")) {
    PushElements(collar);
  } else if ($(".buy__Button").hasClass("cenicero")) {
    PushElements(cenicero);
  }
}
//En CartAdding, se identifica el elemento y se comprueba si existe en el arreglo cart, si existe se modifica la propiedad del objeto cantidad para ser renderizado, si no se pushea por primera vez y se realiza lo anterior mencionado, la cantidad de veces que determina quantity. Se pushea cada uno de los elementos a un carrit literal que ayduara a dar el monto total a pagar yla sumatoria de articulos en e carrito. Se actualiza el storage de ambos carritos.
function PushElements(element) {
  for (let i = 0; i < quantity; i++) {
    let exist = cart.some((product) => product.id === element.id);
    if (exist) {
      let x = cart.findIndex((product) => product.id == element.id);
      cart[x].cantidad++;
    } else {
      cart.push(element);
    }
    literalCart.push(element);
    localStorage.setItem("literalCart", JSON.stringify(literalCart));
    localStorage.setItem("cart", JSON.stringify(cart));
    $(".cartCountingItems").text(literalCart.length);
  }
}

// APP.JS LINEA 6 Se establece la cantidad de productos a comprar mediante el input.value.
function quantityValue() {
  quantity = $(".buy__Button--quantity:input").val();
}

//RENDER.JS LINEA 19 se elimina el padre del elemento seleccionado del DOM y se eliminan de los correspondientes carritos.
function DeleteItems(e) {
  e.target.parentElement.remove();
  DeleteCart(e.target.dataset.id);
  DeleteLiteralCart(e.target.dataset.id, e.target.dataset.quantity);
  RenderingTotal(literalCart);
}
//Se buscan los index de los elementos eliminados que coinciden con los ids de los elementos del carrito. y se elimina ese index
function DeleteCart(item) {
  let deleteable = cart.findIndex((product) => product.id == item);
  cart.splice(deleteable, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
//se buscan el primer index del elemento que cumple con la condicion de igualdad entre el producto id y el id del target seleccionado y se accede a la propiedad cantidad del elemento y se eliminan en base a eso.
function DeleteLiteralCart(item, quantity) {
  let deleteable = literalCart.findIndex((product) => product.id == item);
  literalCart.splice(deleteable, quantity);
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
//Se renderiza el total y se inserta en el landing del carrito
function RenderingTotal(literalCart) {
  let totalPrice = 0;
  for (const product of literalCart) {
    totalPrice = totalPrice + product.precio;
  }

  //Si hay objetos en los carritos se elimina cualquier registro anterior, para no sumar hijos a resultados anteriores. Se renderiza y se adjuntan al padre el total actualizado dinamicamente. y se deja entrar al button de limpieza de carrito. Cuando se hace click en el boton cada objeto renderizado del carrito se oculta del dom y se elimina del carrito(eliminandolo del dom) y se vuelve a disparar la funcion para declinar en el "else"
  if (totalPrice > 0) {
    $(".total__centered").empty();
    $(".total__centered")
      .append(
        `
        <h2 class="total__centered--text">
        El total es de ${totalPrice}
        </h2
        `
      )
      .fadeIn(2000, function () {
        $(".total__centered").append(
          `<button class="eraser">Limpiar carrito</button>`
        );
      });

    $(".eraser").on("click", DeletingAllRendered);

    function DeletingAllRendered(e) {
      e.preventDefault();
      $(".cart__item--try").each(function (i) {
        $(this)
          .delay(i * 200)
          .fadeOut(800);
      });
      cart = [];
      literalCart = [];
      localStorage.setItem("literalCart", JSON.stringify(literalCart));
      localStorage.setItem("cart", JSON.stringify(cart));
      RenderingTotal(literalCart);
    }
  } else {
    //Si no hay nada en el carrito se elimina cualquier registro anterior para evitar errores. se añade el texto que no hay items y se ofrece un boton para redirigirse al inicio con una animacion de entrada.
    $(".total__centered").empty();
    $(".total__centered")
      .append(
        `
      <h2 class="total__centered--text">
      No tienes productos en el carrito.
      </h2
          `
      )
      .hide()
      .fadeIn(2000, function () {
        $(".total__centered").append(
          `<a class="total__centered--text--a " href="../index.html">Inicio</a>`
        );
      });
  }
}

