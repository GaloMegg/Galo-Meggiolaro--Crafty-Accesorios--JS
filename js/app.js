//Variables
let quantity;
let product;
let template = document.querySelector("#cardGenerator").content;
let insert = document.querySelector(".insertClone");
//Arrays
let total = 0;
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

// function NewUser() {
//   alert(`Crea tu usuario para comprar`);
//   let user = prompt(`Ingresa un usuario`);
//   let password = prompt(`Ingresa una contraseña`);
//   let postalCode = prompt(`Ingresa un codigo postal`);
//   let UserN1 = new Userdata(user, password, postalCode);
//   return UserN1;
// }
// class Userdata {
//   constructor(user, password, postalCode) {
//     (this.userName = user),
//       (this.userPassword = password),
//       (this.cp = postalCode);
//   }
// }
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
  let option = prompt(`El total es de ${total} elija un medio de pago \n
    1)Transferencia
  2)Mercado pago
  3)Efectivo
  0)Salir`);
  return option;
}

//DOM MANIPULATION
function CardCreator(products) {
  products.forEach((product) => {
    template
      .querySelector("img")
      .setAttribute("src", `../cart/images/${product.nombre}.jpg`);
    template.querySelector("#product--Name").textContent = product.nombre;
    template.querySelector("#product--Price").textContent = product.precio;
    template.querySelector("#product--Material").textContent = product.material;
  });

  let cloner = document.importNode(template, true);

  insert.appendChild(cloner);
}
//code

//Se intenta recuperar cualquier carrito o compra que haya rebotado
let LSItems = JSON.parse(localStorage.getItem("items"));

//Si existe un almacenamiento local (LSItems=true)
if (LSItems) {
  //pregunta si desea continuar con el carrito anterior
  let backUpStorage = confirm(`¿Quieres continuar con tu anterior carrito?`);

  //Si se desea continuar con el carrito anterior
  if (backUpStorage) {
    //Creamos un array de los precios guardados para actualizarlos
    let prices = [];
    //Iteramos el array guardado para cargar los precios al array
    LSItems.forEach((product) => {
      prices.push(product.precio);
      CardCreator(LSItems);
    });

    //Realizamos la suma de todos los productos
    let total = prices.reduce((a, b) => {
      return a + b;
    });

    //Presentar Paso a seguir en cuanto a checkout
    let checkout = parseInt(CheckoutMenu());

    //Segun el paso a seguir se deriban las siguientes
    while (checkout != 0) {
      switch (checkout) {
        //medios de Pago

        case 1:
          //Se crea la lista con la suma del total(para almacenarlo y cobrar)
          checkout = parseInt(gatewayMenu(total));
          break;

        //ver carrito
        case 2:
          //se crea una lista de los objetos del carrito y sus precios y se mandan a consola.
          for (const product of LSItems) {
            console.log(`${product.nombre} ${product.precio}`);
          }

          // se consulta si moverse a case 1
          let gateway = confirm(`¿Listo para pagar?`);
          if (gateway) {
            checkout = 1;
          }
          break;

        default:
          //Cualquier respuesta fuera de las brindadas dara finalizado el programa.
          checkout = 0;
          break;
      }
    }
    //Si no se desea continuar con el carrito
  } else {
    // Se elimina el guardado
    localStorage.removeItem("items");
    //Se declara un nuevo array de productos y un nuevo total estatico

    let products = [];
    let prices = [];
    //Se pregunta que producto desea comprar
    product = parseInt(AskKeepBuying(`¡Empecemos de nuevo!`));
    while (product != 0) {
      switch (product) {
        // earring
        case 1:
          quantity = quantityFuntion(aro);

          //Se añaden productos al array nuevo.
          for (i = 0; i < quantity; i++) {
            products.push(aro);
            CardCreator(products);
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
          //Se añaden productos al array nuevo.

          for (i = 0; i < quantity; i++) {
            products.push(collar);
            CardCreator(products);
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

          //Se añaden productos al array nuevo.
          for (i = 0; i < quantity; i++) {
            products.push(anillo);
            CardCreator(products);
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
    //Se Garda en el storage los items a comprar
    localStorage.setItem("items", JSON.stringify(products));

    //Se cargan los prices al array y Se actualiza el Total estatico
    products.forEach((product) => prices.push(product.precio));
    total = prices.reduce((a, b) => {
      return a + b;
    });

    //Presentar Paso a seguir en cuanto a checkout
    let checkout = parseInt(CheckoutMenu());

    //Segun el paso a seguir se deriban las siguientes
    while (checkout != 0) {
      switch (checkout) {
        //medios de Pago

        case 1:
          //Se muestran las opciones de pago
          checkout = parseInt(gatewayMenu(total));
          break;

        //ver carrito
        case 2:
          //se crea una lista de los objetos del carrito y sus precios y se mandan a consola.
          for (const product of products) {
            console.log(`${product.nombre} ${product.precio}`);
          }

          // se consulta si moverse a case 1
          let gateway = confirm(`¿Listo para pagar?`);
          if (gateway) {
            checkout = 1;
          }
          break;

        default:
          //Cualquier respuesta fuera de las brindadas dara finalizado el programa.
          checkout = 0;
          break;
      }
    }
  }
}
//Si no existe almacenamiento local
else {
  let products = [];
  let prices = [];
  //Se pregunta que producto desea comprar
  product = parseInt(AskKeepBuying(`¡Hola! ¡Bienvenido!`));
  while (product != 0) {
    switch (product) {
      // earring
      case 1:
        quantity = quantityFuntion(aro);

        //Se añaden productos al array nuevo.
        for (i = 0; i < quantity; i++) {
          products.push(aro);

          CardCreator(products);
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
        //Se añaden productos al array nuevo.

        for (i = 0; i < quantity; i++) {
          products.push(collar);

          CardCreator(products);
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

        //Se añaden productos al array nuevo.
        for (i = 0; i < quantity; i++) {
          products.push(anillo);

          CardCreator(products);
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
  //Se Garda en el storage los items a comprar
  localStorage.setItem("items", JSON.stringify(products));

  //Se cargan los prices al array y Se actualiza el Total estatico
  products.forEach((product) => {
    prices.push(product.precio);
  });
  total = prices.reduce((a, b) => {
    return a + b;
  });

  //Presentar Paso a seguir en cuanto a checkout
  let checkout = parseInt(CheckoutMenu());

  //Segun el paso a seguir se deriban las siguientes
  while (checkout != 0) {
    switch (checkout) {
      //medios de Pago

      case 1:
        //Se muestran las opciones de pago
        checkout = parseInt(gatewayMenu(total));
        break;

      //ver carrito
      case 2:
        //se crea una lista de los objetos del carrito y sus precios y se mandan a consola.
        for (const product of products) {
          console.log(`${product.nombre} ${product.precio}`);
        }

        // se consulta si moverse a case 1
        let gateway = confirm(`¿Listo para pagar?`);
        if (gateway) {
          checkout = 1;
        }
        break;

      default:
        //Cualquier respuesta fuera de las brindadas dara finalizado el programa.
        checkout = 0;
        break;
    }
  }
}
