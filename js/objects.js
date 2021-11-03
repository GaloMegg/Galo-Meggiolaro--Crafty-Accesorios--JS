//Se solicita a la api los valores de las monedas en base al dolar.
$.ajax({
  url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
  success: function (data) {
    //Se cambia el rpecio de los objetos para ajustarlos a la inflacion
    aro.precio = Math.ceil(data.usd.ars * 4);
    anillo.precio = Math.ceil(data.usd.ars * 5);
    collar.precio = Math.ceil(data.usd.ars * 8);
    cenicero.precio = Math.ceil(data.usd.ars * 12);
    //Se modifica el texto actualizando los precios automaticamente en cada html de los productos
    $(".ashtrays__price").text(`$${cenicero.precio}`);
    $(".rings__price").text(`$${anillo.precio}`);
    $(".earrings__price").text(`$${aro.precio}`);
    $(".necklace__price").text(`$${collar.precio}`);
  },
});

const aro = {
  nombre: "aro",
  precio: 0,
  material: "acero inoxidable",
  cantidad: 1,
  id: 1,
};
const anillo = {
  nombre: "anillo",
  precio: 0,
  material: "arcilla polimerica",
  cantidad: 1,
  id: 2,
};
const collar = {
  nombre: "collar",
  precio: 0,
  material: "hilo chino y joyas fantasía",
  cantidad: 1,
  id: 3,
};
const cenicero = {
  nombre: "cenicero",
  precio: 0,
  material: "resina e-poxi",
  cantidad: 1,
  id: 4,
};
