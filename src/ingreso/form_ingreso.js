
const form = document.querySelector("form");

form.addEventListener("submit", async (e)=>{
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

  const baseUrl = "http://localhost:3000";
  const url = baseUrl + "/login";
  const fetchConfig = {
    method: 'POST',
    Headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(User)
  }

  try {
    const respuesta     = await fetch(url, fetchConfig);
    // si la respuesta no es OK 
    if( !respuesta.ok ) {
       // gestionar error o mensajes recibidos 
       console.error("La respuesta no está OK");
       return;
    } 

    // en caso de exito 
    const objetoJson    = await respuesta.json(); 
    console.dir( objetoJson);

    const usuario = objetoJson.usuario;
    // caso éxito 

    // guardo datos del usuario y TOKEN 
    localStorage.setItem('usuario', JSON.stringify(usuario));
    // redirijo a página protegida 
    window.location = '../dashboard.html';

} catch (error) {
    // gestion errores 
    console.error( error.code );
    console.error( error.message );
}

})


/* Conexion de form ingreso a backEnd */



  
 