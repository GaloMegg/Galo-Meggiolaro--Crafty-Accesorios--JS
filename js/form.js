//Se declara el array con el valor existente en el storage si es que existe y si no se lo declara vacio
let messageSent = JSON.parse(localStorage.getItem("proyects"))||[];
//Se añade el evento click al botton submit del formulario.
$(".submitButton").on("click", SentForm);
