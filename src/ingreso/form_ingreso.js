
const form = document.querySelector("form");

const titulo = document.querySelector("h2")
const alerta = document.createElement("div")
const salto = document.createElement("br")
const text = document.createTextNode("El Usuario y/o la contraseña son erroneos.")
const text2 = document.createTextNode("Intentelo nuevamente")
alerta.appendChild(text)
alerta.appendChild(salto)
alerta.appendChild(text2)
alerta.setAttribute("class", "div_error")

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const formElement = e.currentTarget;
  const formData = new FormData(formElement)
  const email = formData.get("email")
  const password = formData.get("password")

  const User = {
    email,
    password
  }

  /* Enviamos el objeto */

  const baseUrl = getBaseUrl();
  const url = baseUrl + "/login";
  const fetchConfig = {
    method: 'POST',
    Headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(User)
  }

  try {
    const respuesta = await fetch(url, fetchConfig);
    // si la respuesta no es OK 
    if (!respuesta.ok) {
      // gestionar error o mensajes recibidos 
      console.error("La respuesta no está OK");
      titulo.appendChild(alerta)
      /* Quito la alerta de error contraseña o usuario */
      setTimeout(() => {
        titulo.removeChild(alerta)
      }, 2500);
      
      return;
    }

    // en caso de exito 
    const objetoJson = await respuesta.json();
    console.dir(objetoJson);

    const usuario = objetoJson.usuario;
    // caso éxito 

    // guardo datos del usuario y TOKEN 
    localStorage.setItem('usuario', JSON.stringify(usuario));
    // redirijo a página protegida 
    window.location = '../../categoria/index.html';
    /*window.location = '../dashboard.html'; */
  } catch (error) {
    // gestion errores 
    console.error(error.code);
    console.error(error.message);
  }

})





