const aro = {
  nombre: "aro",
  precio: 4,
  material: "acero inoxidable",
  cantidad: 1,
  id: 1,
};
const anillo = {
  nombre: "anillo",
  precio: 5,
  material: "arcilla polimerica",
  cantidad: 1,
  id: 2,
};
const collar = {
  nombre: "collar",
  precio: 8,
  material: "hilo chino y joyas fantasía",
  cantidad: 1,
  id: 3,
};
const cenicero = {
  nombre: "cenicero",
  precio: 12,
  material: "resina e-poxi",
  cantidad: 1,
  id: 4,
};

let currencies = {
  usd: 0,
  ars: 0,
  eur: 0,
  cny: 0,
};

$.ajax({
  url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
  success: function (data) {
    for (let key in currencies) {
      currencies[key] = data.usd[key]
    }
  },
});
