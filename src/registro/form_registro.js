const vemail = document.getElementById("email");
const vpassword = document.getElementById("password");
const vpassword2 = document.getElementById("password2");
const messageUser = document.getElementById("resultadoUsuario")
const messagePass = document.getElementById("resultadoPass")
const btn = document.getElementById("btn__submit")

vemail.addEventListener("input", function (event) {
  if (vemail.validity.typeMismatch) {
    vemail.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    vemail.setCustomValidity("");
  }
});

function verificarContraseñas() {
  let password1 = vpassword.value
  let password2 = vpassword2.value
  if (password1 != '' && password2 != '') {
    if (password1 != password2) {
      messagePass.textContent = "Las contraseñas no coinciden, Intentelo Nuevamente";
      messagePass.style.display = "block"
      messagePass.style.color = "red"
      vpassword2.classList.add("error");

      //Ocultar el mensaje
      setTimeout(() => {
        messagePass.style.display = "none";
        vpassword2.classList.remove("error");
      }, 2500);
      return false;
    }
  }
  return true;
}


const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  if (verificarContraseñas()) {

    const formElement = e.currentTarget;
    const formData = new FormData(formElement)
    const email = formData.get("email")
    const password = formData.get("password")

    const newUser = {
      email,
      password
    }

    /* Enviamos el objeto */

     const baseUrl = getBaseUrl();
    const url = baseUrl + "/registro";
    const fetchConfig = {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }

    console.dir(fetchConfig)
    const respuesta = await fetch(url, fetchConfig)
      .then(r => r.json())
      .then(d => {
        console.dir(d);
        messageUser.textContent = "Usuario registrado con exito"
        messageUser.style.display = "block"
        messageUser.style.color = "green"
        setTimeout(() => {
         window.location.href = "../ingreso/form_ingreso.html"
        }, 3000);
      })
      .catch(e => {
        console.error(e)
        messageUser.textContent = "Usuario no Registrado"
        messageUser.style.display = "block"
        messageUser.style.color = "red"
      })
  }
}
)


/* Conexion de form ingreso a backEnd */




