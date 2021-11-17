//we bring the carts to be manipulated
cart = JSON.parse(localStorage.getItem("cart")) || [];
literalCart = JSON.parse(localStorage.getItem("literalCart")) || [];
// for each elemnt in "cart": a child is rendered, which is append to his dad.
cart.forEach((element) => {
  $(".cart__item").append(`
    <div class="cart__item--try" data-id="${element.id}">
              <img alt="" class="cart__item--img" src=" ../cart/images/${element.pName}.jpg">
              <p class="cart__item--name">Nombre: ${element.pName}</p>
              <p class="cart__item--price">Precio: ${element.price}</p>
              <p class="cart__item--material">Material: ${element.material}</p>
              <p class="cart__item--quantity">Cantidad: ${element.q}</p>
              <img src="images/x.svg" alt="" class="cart__item--delete" data-quantity = "${element.q}" data-id=${element.id}>
          </div>`);
});
//the images selected to delete elements are chosen to add them the event click with a funtion that deletes the DOM content and the "cart" items
let deleter = document.querySelectorAll(".cart__item--delete");
deleter.forEach((element) => {
  element.addEventListener("click", DeleteItems); //funtion.js line:35
});
//The first total render is redered and the dynamic update are attached to the functions of elimination
RenderingTotal(literalCart); //funtion.js line:57
