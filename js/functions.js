//app.js line: 5
//The click event is attached to all the buy buttons. If the button has an especific class, it push the object
function CartAdding() {
  if ($(".buy__Button").hasClass("earring")) {
    PushElements(earring);
  } else if ($(".buy__Button").hasClass("ring")) {
    PushElements(ring);
  } else if ($(".buy__Button").hasClass("necklace")) {
    PushElements(necklace);
  } else if ($(".buy__Button").hasClass("ashtray")) {
    PushElements(ashtray);
  }
}
//In CartAdding the element pushed is checked if its already in the cart, if it is his quantity is modified. if it's not the object is pushed. The storage is updated.
function PushElements(element) {
  for (let i = 0; i < quantity; i++) {
    let exist = cart.some((product) => product.id === element.id);
    if (exist) {
      let x = cart.findIndex((product) => product.id == element.id);
      cart[x].q++;
    } else {
      cart.push(element);
    }
    literalCart.push(element);
    localStorage.setItem("literalCart", JSON.stringify(literalCart));
    localStorage.setItem("cart", JSON.stringify(cart));
    $(".cartCountingItems").text(literalCart.length);
  }
}
//app.js line:6
//the input value modifies the quantity of the elements to be pushed in PushElements.
function quantityValue() {
  quantity = $(".buy__Button--quantity:input").val();
}
//render.js line: 19
//The father is deleted from the DOM and all abjects are erased from both carts.
function DeleteItems(e) {
  e.target.parentElement.remove();
  DeleteCart(e.target.dataset.id);
  DeleteLiteralCart(e.target.dataset.id, e.target.dataset.quantity);
  RenderingTotal(literalCart);
}
//The funtion look for the index that matches the product id and that index is deleted.
function DeleteCart(item) {
  let deleteable = cart.findIndex((product) => product.id == item);
  cart.splice(deleteable, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
}
//The funtion look for the first elemnt and returns the index that matches the product id and that index is deleted based on the quantity property.
function DeleteLiteralCart(item, quantity) {
  let deleteable = literalCart.findIndex((product) => product.id == item);
  literalCart.splice(deleteable, quantity);
  localStorage.setItem("literalCart", JSON.stringify(literalCart));
}
//render.js Line: 22
//The first total is redered at the landing cart.
function RenderingTotal(literalCart) {
  let totalPrice = 0;
  for (const product of literalCart) {
    totalPrice = totalPrice + product.price;
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

function PayForCaba(e) {
  e.preventDefault();
  $(".caba__cost").text("");
  let cabaOptions = $("#cabaoptions:input").val();
  let cp = parseInt($(".shippingForm__caba--cp").val());

  if (cabaOptions == "mercadoEnvios") {
    CalculateCostsCaba(cabaOptions, cost, cp);
  } else if (cabaOptions == "oca") {
    CalculateCostsCaba(cabaOptions, cost, cp);
  } else {
    CalculateCostsCaba(cabaOptions, cost, cp);
  }
}
function PayForRestOfArgentina(e) {
  e.preventDefault();
  $(".restOf__cost").text("");
  let restOfOptions = $("#restOfOptions:input").val();
  let cp = parseInt($(".shippingForm__restOf--cp").val());

  if (restOfOptions == "mercadoEnvios") {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  } else if (restOfOptions == "oca") {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  } else {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  }

  $(".enviosForm--caba").trigger("reset");
}

function CalculateCostsCaba(cabaOptions, cost, cp) {
  if (cp > 999 && cp < 1201) {
    let renderCost = cost[0][`${cabaOptions}`][0];
    $(".caba__cost").text(`${renderCost}`);
  } else if (cp > 1200 && cp < 1501) {
    let renderCost = cost[0][`${cabaOptions}`][1];
    $(".caba__cost").text(`${renderCost}`);
  } else if (cp > 1500 && cp < 1900) {
    let renderCost = cost[0][`${cabaOptions}`][2];
    $(".caba__cost").text(`${renderCost}`);
  }
}
function CalculateCostsRestOfArgentina(restOfOptions, cost, cp) {
  if (cp > 1899 && cp < 4001) {
    let renderCost = cost[1][`${restOfOptions}`][0];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 4000 && cp < 7001) {
    let renderCost = cost[1][`${restOfOptions}`][1];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 7000 && cp < 9500) {
    let renderCost = cost[1][`${restOfOptions}`][2];
    $(".restOf__cost").text(`${renderCost}`);
  }
}

function DateAppointment(e) {
  appointment = [];
  let when = $(".day").val();
  let who = $(".appointmentName").val();
  appointment.push(when, who);
  localStorage.setItem("appointment", JSON.stringify(appointment));
  RenderAppointment();
}
function CancelAppointment() {
  appointment = [];
  localStorage.removeItem("appointment");
  $(".appointmentRender--two").hide();
  $(".appointmentRender--one").fadeIn();
}
function RenderAppointment() {
  $(".aTwo__appointment--name").text(`
   ${appointment[1]}
    `);
  $(".aTwo__appointment--day").text(`
   ${appointment[0]}
    `);
  $(".appointmentRender--one").hide();
  $(".appointmentRender--two").fadeIn();
}
function RenderDateAppointment() {
  $(".appointmentRender--two").hide();
  $(".appointmentRender--one").fadeIn();
}
