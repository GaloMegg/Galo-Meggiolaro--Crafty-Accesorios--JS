//app.js
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
//render.js
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
  //If there are objects in the cart, they are eliminated to clean the cart and to make old logs don't disturb. The first total is rendered and is appended to the father. When the clean btton is on click the rendered objects are hidden, and erased from the cart(the deleted them from the DOM), then the function is fired one more time to enter in the else part.
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
    //If there are no items in the cart, the old logs are eliminated to avoid future issues. The text warn that there are no item, and ofers a link to the index.html.
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
//shipping.js
//shipping.js line: 10
//In the CABA shipping options the value of the select input defines the prices of the shipment, in the cp (ZIP) the users must load their own CP
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
//the ZIP(cp) code is divided into 3 parts in each zones, and the json is manipulated with that options and CP ranks
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
//shipping.js line: 11
//In the rest of Argentina shipping options the value of the select input defines the prices of the shipment, in the cp (ZIP) the users must load their own CP
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
//the ZIP(cp) code is divided into 3 parts in each zones, and the json is manipulated with that options and CP ranks
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
//shipping.js line: 15
//There are two divs in the DOM and they are shown or hide dependind on if is there an appointment in the storage. This one shows the appointment already booked and hide the form of the appointment
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
//shipping.js line:17
//There are two divs in the DOM and they are shown or hide dependind on if is there an appointment in the storage. This one shows the appointment form to book and appointment with date and name. (this sends an email to Crafty's email)
function RenderDateAppointment() {
  $(".appointmentRender--two").hide();
  $(".appointmentRender--one").fadeIn();
}
//shipping.js line:20
//This function creates and array that contains the value of the forms input and is used in RenderAppointment(). It also sets an item in the local storage with that info.
function DateAppointment() {
  appointment = [];
  let when = $(".day").val();
  let who = $(".appointmentName").val();
  appointment.push(when, who);
  localStorage.setItem("appointment", JSON.stringify(appointment));
  RenderAppointment();
}
//shipping.js line:21
//This function clears the array created with DateAppointment() and remove the item in the local storage, it also do the work of RenderDateAppointment(). It brings to the DOM the appointment form, for the users, ready to pick an other day.
function CancelAppointment() {
  appointment = [];
  localStorage.removeItem("appointment");
  $(".appointmentRender--two").hide();
  $(".appointmentRender--one").fadeIn();
}
