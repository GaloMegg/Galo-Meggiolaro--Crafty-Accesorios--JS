let messageSent = [];
$(".submitButton").on("click", SentForm);

function SentForm(e) {
  e.preventDefault();
  let userName = $("#nombre").val();
  let secondName = $("#apellido").val();
  let phoneNumber = $("#telefono").val();
  let email = $("#email").val();
  let emailOrPhone = $("#emailradio").val();
  let telefonoOrPhone = $("#teleoemail").val();
  let gender = $("#sexo").val();
  let whatsapp = $("#whatsappsvg").val();
  let proyect = $("#proyecto").val();
  const mensajenuevo = new SendMesage(
    userName,
    secondName,
    phoneNumber,
    email,
    emailOrPhone,
    telefonoOrPhone,
    gender,
    whatsapp,
    proyect
  );
  messageSent.push(mensajenuevo);
  localStorage.setItem("proyects", JSON.stringify(messageSent));
}

// userName,
//       secondName,
//       phoneNumber,
//       email,
//       wayOfContact,
//       gender,
//       whatsapp,
//       proyect
