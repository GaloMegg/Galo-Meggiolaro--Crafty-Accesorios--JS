//A json format text imported by ajax carries with it the shipping costs
let cost;
$.ajax({
  url: "../js/shippingcost.json",
  success: function (data) {
    cost = data;
  },
});
// An event id added to the buttons "calcular" the depends of the destination of the package.
$(".sentButton__caba").on("click", PayForCaba); //function.js line: 118
$(".sentButton__restOf").on("click", PayForRestOfArgentina); //function.js line: 118
//To the appointment section, the apointment variable is declared and at first it got a null value (boolean(null)=false) so the funtions follow that logic.
let appointment = JSON.parse(localStorage.getItem("appointment"));
if (appointment) {
  RenderAppointment(); // function.js line:175
} else {
  RenderDateAppointment(); // function.js line:187
}
// The buttons hide or show, create or delete the Appointment.
$(".shippingForm__date").on("click", DateAppointment); // function.js line:193
$(".cancelButton").on("click", CancelAppointment); // function.js line:203
