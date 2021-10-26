//Se establece el carrito para el dom y el carrito para el carrito visual
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];

$(".buy__Button").on("click", CartAdding);
$(".buy__Button--quantity").on("click", quantityValue);
$(".cartCountingItems").text(literalCart.length);
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
let quantity;
function quantityValue() {
  quantity = $(".buy__Button--quantity:input").val();
}
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

