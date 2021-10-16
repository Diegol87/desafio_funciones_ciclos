let form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let asunto = document.querySelector("#asunto").value;
    let mensaje = document.querySelector("#mensaje").value;

    let resultado = validar(nombre, asunto, mensaje);
   
    if(resultado === true) {
        exito();
    }    
 })

 function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito"
 }

 function validar(nombre, asunto, mensaje) {

    let pasamosLaValidacion = true;
    let patron = /^[a-zA-Z\s]+$/gi;

    if(nombre === "") {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido"
     pasamosLaValidacion = false
    } else if(patron.test(nombre) === false) {
     document.querySelector(".errorNombre").innerHTML = "El formato no es el correcto"
     pasamosLaValidacion = false
    }

    let patron01 = /^[a-zA-Z\s]+$/gi;


    if(asunto === "") {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
     pasamosLaValidacion = false
    } else if(patron01.test(asunto) === false) {
     document.querySelector(".errorAsunto").innerHTML = "El formato no es el correcto"
     pasamosLaValidacion = false
    }

 let patron02 = /^[a-zA-Z\s]+$/gi;

 if(mensaje === "") {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido"
 pasamosLaValidacion = false
} else if(patron02.test(mensaje) === false) {
 document.querySelector(".errorMensaje").innerHTML = "El formato no es el correcto"
 pasamosLaValidacion = false
}

    return pasamosLaValidacion
      
}
