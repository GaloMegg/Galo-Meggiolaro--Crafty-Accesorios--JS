// let nameContact = ;
// let secondNameContact = ;
// let phoneNumberContact = ;
// let emailContact = ;
// let emailOption = ;
// let telephoneOption = ;
// let genderContact =;
// let whatsapp = ;
// let proyect = ;

$.ajax({
  method: "POST",
  url: "https://formsubmit.co/ajax/galomeggiolarobul@gmail.com",
  dataType: "json",
  accepts: "application/json",
  data: {
    name: $("#name").val(),
    secondName: $("#secondName").val(),
    phoneNumber: $("#phoneNumber").val(),
    email: $("#email").val(),
    telOrEmail: [$("#emailradio").val(), $("#teleradio").val()],
    gender: $("#gender").val(),
    whatsapp: $("#whatsappsvg").val(),
    message: $("#proyecto").val(),
  },
  success: (data) => console.log(data),
  error: (err) => console.log(err),
});
