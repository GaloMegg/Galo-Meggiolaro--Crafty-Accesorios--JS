let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
    console.log(cost);
  },
});
$(".sentButton__restOf").on("click", PayForRestOfArgentina);
$(".sentButton__caba").on("click", PayForCaba);

function PayForCaba(e) {
  $(".caba__cost").text("");
  e.preventDefault();
  let cabaOptions = $("#cabaoptions:input").val();
  let cp = parseInt($(".shippingForm__caba--cp").val());

  if (cabaOptions == "mercadoEnvios") {
    CalculateCostsCaba(cabaOptions, cost, cp);
  } else if (cabaOptions == "oca") {
    CalculateCostsCaba(cabaOptions, cost, cp);
  } else {
    CalculateCostsCaba(cabaOptions, cost, cp);
  }
}
function PayForRestOfArgentina(e) {
  $(".caba__cost").text("");
  e.preventDefault();
  let cabaOptions = $("#restOfOptions:input").val();
  let cp = parseInt($(".shippingForm__caba--cp").val());

  if (cabaOptions == "mercadoEnvios") {
    CalculateCostsRestOfArgentina(cabaOptions, cost, cp);
  } else if (cabaOptions == "oca") {
    CalculateCostsRestOfArgentina(cabaOptions, cost, cp);
  } else {
    CalculateCostsRestOfArgentina(cabaOptions, cost, cp);
  }
}

function CalculateCostsCaba(cabaOptions, cost, cp) {
  if (cp > 999 && cp < 1201) {
    let renderCost = cost[0][`${cabaOptions}`][0];
    $(".caba__cost").text(`${renderCost}`);
  } else if (cp > 1200 && cp < 1501) {
    let renderCost = cost[0][`${cabaOptions}`][1];
    $(".caba__cost").text(`${renderCost}`);
  } else if (cp > 1500 && cp < 1900) {
    let renderCost = cost[0][`${cabaOptions}`][2];
    $(".caba__cost").text(`${renderCost}`);
  } else {
    console.log(`no es buenos aires`);
  }
}
function CalculateCostsRestOfArgentina(cabaOptions, cost, cp) {
  if (cp > 999 && cp < 1201) {
    let renderCost = cost[1][`${cabaOptions}`][0];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 1200 && cp < 1501) {
    let renderCost = cost[1][`${cabaOptions}`][1];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 1500 && cp < 1900) {
    let renderCost = cost[1][`${cabaOptions}`][2];
    $(".restOf__cost").text(`${renderCost}`);
  } else {
    console.log(`no es buenos aires`);
  }
}
