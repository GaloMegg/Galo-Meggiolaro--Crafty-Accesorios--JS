let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
  },
});

$(".sentButton__restOf").on("click", PayForRestOfArgentina);

$(".sentButton__caba").on("click", PayForCaba);

let appointment = JSON.parse(localStorage.getItem("appointment"));
if (appointment) {
  RenderAppointment();
} else {
  RenderDateAppointment();
}
$(".shippingForm__date").on("click", DateAppointment);
$(".cancelButton").on("click", CancelAppointment);
