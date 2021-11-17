//A json format text imported by ajax carries with it the shipping costs
let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
  },
});
// An event id added to the buttons "calcular" the depends of the destination of the package.
$(".sentButton__restOf").on("click", PayForRestOfArgentina);
$(".sentButton__caba").on("click", PayForCaba);

//To the appointment section, the apointment variable is declared and at first it got a null value (boolean(null)=false) so the funtions follow that logic. 
let appointment = JSON.parse(localStorage.getItem("appointment"));
if (appointment) {
  RenderAppointment();
} else {
  RenderDateAppointment();
}
// The buttons hide or show, create or delete the Appointment.
$(".shippingForm__date").on("click", DateAppointment);
$(".cancelButton").on("click", CancelAppointment);
