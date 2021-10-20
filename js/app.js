const buyButton = document.querySelector(".buy__Button");
if (buyButton) {
  buyButton.addEventListener("click", CartAdding);
}
const cartCounter = document.querySelector(".cartCountingItems");
const quantitySelectSelector = document.querySelector(".buy__Button--quantity");
let quantitySelect;
if (quantitySelectSelector) {
  quantitySelectSelector.addEventListener("change", QuantityAdding);
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
//
if (cartCounter) {
  cartCounter.textContent = literalCart.length;
}
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

function QuantityAdding(e) {
  quantitySelect = e.target.value;
}
