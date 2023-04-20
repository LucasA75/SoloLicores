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

const form = document.querySelector("form");

form.addEventListener("submit", async (e)=>{
  e.preventDefault()
  const formElement = e.currentTarget;
  const formData = new FormData(formElement)
  const email = formData.get("email")
  const password = formData.get("password")
  
  const newUser = {
    email,
    password
  }

  /* Enviamos el objeto */

  const baseUrl = "http://localhost:3000";
  const url = baseUrl + "/registro";
  const fetchConfig = {
    method: 'POST',
    Headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newUser)
  }

  console.dir(fetchConfig)
  const respuesta = await fetch(url,fetchConfig)
  .then(r => r.json())
  .then(d => {console.dir(d)})
  .catch(e => console.error(e))

})


/* Conexion de form ingreso a backEnd */



  
 