let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
  },
});
$(".sentButton__restOf").on("click", PayForRestOfArgentina);
$(".sentButton__caba").on("click", PayForCaba);

function PayForCaba(e) {
  e.preventDefault();
  $(".caba__cost").text("");
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
  e.preventDefault();
  $(".restOf__cost").text("");
  let restOfOptions = $("#restOfOptions:input").val();
  let cp = parseInt($(".shippingForm__restOf--cp").val());

  if (restOfOptions == "mercadoEnvios") {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  } else if (restOfOptions == "oca") {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  } else {
    CalculateCostsRestOfArgentina(restOfOptions, cost, cp);
  }

  $(".enviosForm--caba").trigger("reset");
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
  }
}
function CalculateCostsRestOfArgentina(restOfOptions, cost, cp) {
  if (cp > 1899 && cp < 4001) {
    let renderCost = cost[1][`${restOfOptions}`][0];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 4000 && cp < 7001) {
    let renderCost = cost[1][`${restOfOptions}`][1];
    $(".restOf__cost").text(`${renderCost}`);
  } else if (cp > 7000 && cp < 9500) {
    let renderCost = cost[1][`${restOfOptions}`][2];
    $(".restOf__cost").text(`${renderCost}`);
  }
}
let appointment = JSON.parse(localStorage.getItem("appointment")) || [];
if(appointment != [] ){
  RenderAppointment()
}
$(".shippingForm__date").on("click", DateAppointment);

function DateAppointment(e) {
  e.preventDefault();
  appointment = [];
  let when = $(".day").val();
  let who = $(".appointmentName").val();
  appointment.push(when, who);
  localStorage.setItem("appointment", JSON.stringify(appointment));
  RenderAppointment();
}

function RenderAppointment() {
  $(".appointmentRender").children().fadeOut();
  $(".appointmentRender").append(`
  <h4 class="resizeTitles">¡${appointment[1]} ya tenes tu turno para pasar a retirar por nuestro showroom!</h4>
                    <p>El día ${appointment[0]}</p>
                    <p>
                        Recordá respetar la distancia social y lavarte bien las manos si pagás en efectivo.
                    </p>
  `).fadeIn()
}
