const aro = {
  nombre: "aro",
  precio: 300,
  material: "Alambre y joya fantasía",
};
const collar = {
  nombre: "collar",
  precio: 600,
  material: "Hilo chino y perlas fantasía",
};
const anillo = {
  nombre: "anillo",
  precio: 400,
  material: "Arcilla polimerica",
};
const cenicero = {
  nombre: "cenicero",
  precio: 1200,
  material: "Resina e-poxi",
};

let cart;
let cartCounter = document.querySelector(`#itemCounter`);
const buyButton = document.querySelectorAll(`.buy__Button`);

buyButton.forEach((element) => {
  element.addEventListener("click", CartAdding);
});

cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCounter.textContent = cart.length;

function CartAdding(e) {
  if (e.target.classList.contains("aro")) {
    cart.push(aro);
    cartCounter.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("collar")) {
    cart.push(collar);
    cartCounter.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("anillo")) {
    cart.push(anillo);
    cartCounter.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else if (e.target.classList.contains("cenicero")) {
    cart.push(cenicero);
    cartCounter.textContent = cart.length;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
