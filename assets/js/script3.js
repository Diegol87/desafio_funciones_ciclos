let sumar = document.querySelector("#btn-sumar");

sumar.addEventListener("click", () => {
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);

    suma = valor1 + valor2;

    document.querySelector(".resultado").innerHTML = suma;
})

let restar = document.querySelector("#btn-restar");

restar.addEventListener("click", () => {
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);

    resta = valor1 - valor2;

    if(resta >= 0) {

    document.querySelector(".resultado").innerHTML = resta;
    } else {
        document.querySelector(".resultado").innerHTML = 0;
    }
})



