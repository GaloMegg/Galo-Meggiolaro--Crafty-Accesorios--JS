//We make a request to the api about the value of the currencies.
$.ajax({
  url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
  success: function (data) {
    //the value of the object are changed by the info that the api brings
    earring.price = Math.ceil(data.usd.ars * 4);
    ring.price = Math.ceil(data.usd.ars * 5);
    necklace.price = Math.ceil(data.usd.ars * 8);
    ashtray.price = Math.ceil(data.usd.ars * 12);
    //the DOM is modified by the dynamic prices
    $(".ashtrays__price").text(`$${ashtray.price}`);
    $(".rings__price").text(`$${ring.price}`);
    $(".earrings__price").text(`$${earring.price}`);
    $(".necklace__price").text(`$${necklace.price}`);
  },
});

const earring = {
  pName: "aro",
  price: 0,
  material: "acero inoxidable",
  q: 1,
  id: 1,
};
const ring = {
  pName: "anillo",
  price: 0,
  material: "arcilla polimerica",
  q: 1,
  id: 2,
};
const necklace = {
  pName: "collar",
  price: 0,
  material: "hilo chino y joyas fantasía",
  q: 1,
  id: 3,
};
const ashtray = {
  pName: "cenicero",
  price: 0,
  material: "resina e-poxi",
  q: 1,
  id: 4,
};
