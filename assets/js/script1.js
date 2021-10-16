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

 if(patron.test(nombre) === false) {
     document.querySelector(".errorNombre").innerHTML = "El asunto es requerido"
     pasamosLaValidacion = false
 }

 if(patron.test(asunto) === false) {
     document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido"
     pasamosLaValidacion = false
 }
    return pasamosLaValidacion
}
