let nameContact = $("#name").val();
let secondNameContact = $("#secondName").val();
let phoneNumberContact = $("#phoneNumber").val();
let emailContact = $("#email").val();
let emailOption = $("#emailradio").val();
let telephoneOption = $("#teleradio").val();
let genderContact = $("#gender").val();
let whatsapp = $("#whatsappsvg").val();
let proyect = $("#proyecto").val();
//pref email.tel
//genero
//whatsapp
//proyect
$.ajax({
  url: "https://formsubmit.co/ajax/galomeggiolarobul@gmail.com",
  method: "POST",
  data: {
    name: `${nameContact}`,
    secondName: `${secondNameContact}`,
    phoneNumber: `${phoneNumberContact}`,
    email: `${emailContact}`,
    telOrEmail: `${emailOption}, ${telephoneOption}`,
    gender: `${genderContact}`,
    whatsapp: `${whatsapp}`,
    message: `${proyect}`,
  },
  dataType: "json",
});
