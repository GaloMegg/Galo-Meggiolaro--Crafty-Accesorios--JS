function CartAdding(e) {
  if (e.target.classList.contains("aro")) {
    for (i = 0; i < quantity; i++) {
      CartAddingObject(aro);
    }
  } else if (e.target.classList.contains("collar")) {
    for (i = 0; i < quantity; i++) {
      CartAddingObject(collar);
    }
  } else if (e.target.classList.contains("anillo")) {
    for (i = 0; i < quantity; i++) {
      CartAddingObject(anillo);
    }
  } else if (e.target.classList.contains("cenicero")) {
    for (i = 0; i < quantity; i++) {
      CartAddingObject(cenicero);
    }
  }
}
//
function CartAddingObject(object) {
  cart.push(object);
  //Se actualiza el numero del carrito, segun el largo del array
  cartCounter.textContent = cart.length;
  //Se sube el carrito al local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function Deleting(e) {
  //Si el evento posee la clase (...)--delete
  if (e.target.classList.contains("cart__item--delete")) {
    //Se remueve el padre del DOM (y el hijo)
    e.target.parentElement.remove();
    //Definimos una variable con el valor actualizable del index donde esta el elemento a borrar. (segun el ID dado)
    let deleted = cart.findIndex(
      (product) => product.id == e.target.parentElement.dataset.id
    );
    //Se retira del array del carrito el valor del index(el poducto seleccionado)
    cart.splice(deleted, 1);
    //Se actualiza el storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
