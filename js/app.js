//Variables
let quantity;
let product;
let total = 0;
//Arrays
let products = [];
let prices = [];
let users = [];
////objects

const aro = {
  nombre: "aro",
  precio: 300,
  material: "alambre",
};

const collar = {
  nombre: "collar",
  precio: 400,
  material: "perlas plasticas",
};

const anillo = {
  nombre: "anillo",
  precio: 350,
  material: "clay",
};
//UserData Funtions
function NewUser() {
  alert(`Crea tu usuario para comprar`);
  let user = prompt(`Ingresa un usuario`);
  let password = prompt(`Ingresa una contraseña`);
  let postalCode = prompt(`Ingresa un codigo postal`);
  let UserN1 = new Userdata(user, password, postalCode);
  return UserN1;
}
class Userdata {
  constructor(user, password, postalCode) {
    (this.userName = user),
      (this.userPassword = password),
      (this.cp = postalCode);
  }
}
////Shopping Funtions
function cart(quantity, price) {
  let subTotal = quantity * price;
  return subTotal;
}
function AskKeepBuying(title) {
  let ask = prompt(`${title}\n
    ¿Que desea comprar?
          1)Aros
          2)Collares
          3)Anillos
          0)Salir`);

  return ask;
}
function quantityFuntion(object) {
  let quantityInitial = parseInt(
    prompt(`¿Cuantos? El precio es de ${object.precio} por ${object.nombre}`)
  );
  if (isNaN(quantityInitial) || quantityInitial == 0) {
    alert(`ingresa una opción correcta`);
  }
  return quantityInitial;
}
function totalFuntion(quantity, object, total) {
  let singOrPlural = quantity;
  if (singOrPlural == 1) {
    alert(
      `${singOrPlural} ${
        object.nombre
      } se ha añadido al carrito. \nEl subtotal es de ARS${cart(
        singOrPlural,
        object.precio
      )}
      Y el total de ARS${total}`
    );
  } else if (singOrPlural > 1) {
    alert(
      `${singOrPlural} ${
        object.nombre
      }s se han añadido al carrito. \nEl subtotal es de ARS${cart(
        singOrPlural,
        object.precio
      )}
      Y el total de ARS${total}`
    );
  }
}

//Checkout Funtions
//Menu
function CheckoutMenu() {
  let option = prompt(`¿Que deseas hacer?\n
1)Medios de pago
2)Ver Carrito
0)Salir`);
  return option;
}
//gateway
function gatewayMenu(total) {
  let option =
    prompt(`El total es de ${total} elija un medio de pago 1)Transferencia\n
  2)Mercado pago
  3)Efectivo
  0)Salir`);
  return option;
}
//cart

//code
//
let UserData = NewUser();
users.push(UserData);
product = parseInt(AskKeepBuying(`¡Bienvenidos!`));
while (product != 0) {
  switch (product) {
    // earring
    case 1:
      quantity = quantityFuntion(aro);
      //Se añaden precios a un array y objetos a otros.
      for (i = 0; i < quantity; i++) {
        products.push(aro);
      }
      //se calcula un total dinamico
      total = total + cart(quantity, aro.precio);
      //Texto sobre subtotal y total
      totalFuntion(quantity, aro, total);
      //se redirecciona o finaliza el loop
      product = parseInt(AskKeepBuying(`¿A que pasillo vamos ahora?`));
      break;
    //necklase
    case 2:
      quantity = quantityFuntion(collar);
      //Se añaden precios a un array y objetos a otros.
      for (i = 0; i < quantity; i++) {
        products.push(collar);
      }

      //se calcula un total dinamico
      total = total + cart(quantity, collar.precio);
      //Texto sobre subtotal y total
      totalFuntion(quantity, collar, total);
      //se redirecciona o finaliza el loop
      product = parseInt(AskKeepBuying(`¿A que pasillo vamos ahora?`));
      break;
    //rings
    case 3:
      quantity = quantityFuntion(anillo);
      //Se añaden precios a un array y objetos a otros.
      for (i = 0; i < quantity; i++) {
        products.push(anillo);
      }

      //se calcula un total dinamico
      total = total + cart(quantity, anillo.precio);
      //Texto sobre subtotal y total
      totalFuntion(quantity, anillo, total);
      //se redirecciona o finaliza el loop
      product = parseInt(AskKeepBuying(`¿A que pasillo vamos ahora?`));
      break;
    default:
      product = parseInt(AskKeepBuying(`Opción Incorrecta`));
      break;
  }
}

products.forEach((product) => {
  prices.push(product.precio);
});

let checkout = parseInt(CheckoutMenu());
while (checkout != 0) {
  switch (checkout) {
    case 1:
      //Se crea la lista con la suma del total(para almacenarlo y cobrar)
      let total = prices.reduce(function (a, b) {
        return a + b;
      }, 0);
      checkout = parseInt(gatewayMenu(total));
      break;
    case 2:
      //se crea una lista de los objetos del carrito(para modificar html con imagenes texto)
      for (const product of products) {
        console.log(product.nombre);
      }
      let gateway = confirm(`¿Listo para pagar?`);
      if (gateway) {
        checkout = 1;
      }
      break;
    default:
      checkout = 0;
      break;
  }
}
//Desafio Complement
let prices_ordenados = prices.sort((a, b) => {
  return a - b;
});
console.log(prices_ordenados);
