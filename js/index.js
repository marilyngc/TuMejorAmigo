const form = document.getElementById("form")

const inputs = document.querySelectorAll("#form input")

const expresiones = {
	name: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
  Name : false,
  LastName : false,
  Email : false,
  Phone : false,
  Password : false

 
}

const validateForm = (e) => {
  switch ( e.target.name){

    case "name":
        validateField(expresiones.name,e.target,"Name");
    break;
    case "lastName":
      validateField(expresiones.name,e.target,"LastName");
      
    break;
    case "email":
      validateField(expresiones.email,e.target,"Email");
    break;
    case "phone":
      validateField(expresiones.phone,e.target,"Phone");
    break;
    case "password":
      validateField(expresiones.password,e.target,"Password");
      validatePassword()
    break;
    case "repeatPassword":
     
      validatePassword()
    break;
  }
};

const validateField = (expression,input,field) => {


  if (expression.test(input.value)) {
    document.getElementById(`form${field}`).classList.remove("formGroupInCorrect")
    document.getElementById(`form${field}`).classList.add("formGroupCorrect")
    document.getElementById(`formGroup${field}`).classList.remove("d-none");
    document.querySelector(`#formGroup${field} i`).classList.add("bi-emoji-smile")
    document.querySelector(`#formGroup${field} i`).classList.remove("bi-emoji-frown")
    document.querySelector(`#formGroup${field} i`).classList.add("formValidationActive")
    document.querySelector(`#formGroup${field} i`).classList.remove("formValidationState")
    document.querySelector(`#formGroup${field} p`).classList.add("d-none")
  
    fields[field] = true



 }else{
    document.getElementById(`form${field}`).classList.add("formGroupInCorrect")
    document.getElementById(`form${field}`).classList.remove("formGroupCorrect")
    document.getElementById(`formGroup${field}`).classList.remove("d-none")
    document.querySelector(`#formGroup${field} i`).classList.remove("formValidationActive")
    document.querySelector(`#formGroup${field} i`).classList.add("formValidationState")
    document.querySelector(`#formGroup${field} i`).classList.remove("bi-emoji-smile")
    document.querySelector(`#formGroup${field} i`).classList.add("bi-emoji-frown")
    document.querySelector(`#formGroup${field} p`).classList.remove("d-none")

    fields[field] = false
 }
}


const validatePassword = () => {
  const inputPassword1 = document.getElementById("floatingPassword")
  const inputPassword2 = document.getElementById("floatingRepeatPassword")

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`formRepeatPassword`).classList.add("formGroupInCorrect")
    document.getElementById(`formRepeatPassword`).classList.remove("formGroupCorrect")
    document.getElementById(`formGroupRepeatPassword`).classList.remove("d-none")
    document.querySelector(`#formGroupRepeatPassword i`).classList.remove("formValidationActive")
    document.querySelector(`#formGroupRepeatPassword i`).classList.add("formValidationState")
    document.querySelector(`#formGroupRepeatPassword i`).classList.remove("bi-emoji-smile")
    document.querySelector(`#formGroupRepeatPassword i`).classList.add("bi-emoji-frown")
    document.querySelector(`#formGroupRepeatPassword p`).classList.remove("d-none")
  

    fields[`password`] = false
  }else{
    document.getElementById(`formRepeatPassword`).classList.remove("formGroupInCorrect")
    document.getElementById(`formRepeatPassword`).classList.add("formGroupCorrect")
    document.getElementById(`formGroupRepeatPassword`).classList.remove("d-none");
    document.querySelector(`#formGroupRepeatPassword i`).classList.add("bi-emoji-smile")
    document.querySelector(`#formGroupRepeatPassword i`).classList.remove("bi-emoji-frown")
    document.querySelector(`#formGroupRepeatPassword i`).classList.add("formValidationActive")
    document.querySelector(`#formGroupRepeatPassword i`).classList.remove("formValidationState")

    document.querySelector(`#formGroupRepeatPassword p`).classList.add("d-none")
    fields[`password`] = true
  }
}
inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);// detecta cuando levanta una tecla
  input.addEventListener("blur", validateForm);// detecta cuando presiona fuera del input
})

form.addEventListener("submit", (e) => {
 e.preventDefault();

 const terms = document.getElementById("terms");

 if (fields.name && fields.lastName && fields.email && fields.phone && fields.password && terms.checked) {
  console.log("egege")
  form.reset();

  document.getElementById("formSend").classList.remove("d-none")
  setTimeout(() => {
    document.getElementById("formSend").classList.add("d-none")
  }, 5000)

  document.querySelectorAll(".formGroupCorrect").forEach((icon) =>{
      icon.classList.remove("formGroupCorrect")
  });
}else{
  document.getElementById("messageError").classList.remove("d-none");
}
});
