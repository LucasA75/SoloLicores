const vemail = document.getElementById("email");
const vpassword = document.getElementById("password");
const vpassword2 = document.getElementById("password2");

vemail.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
  /* if(password != '' && password2 != ''){
    if(password != password2){
        vpassword2.textContent = "Las contraseñas no coinciden";
        vpassword2.classList.add("error");
        return "Las contraseñas no coinciden" 
    }}*/

    //no logré hacer las validaciones :ccc
});





  
 