import{btnuno,btndos,btntres,btncuatro}from"./utilities.js";

import{resultados,resultadosDos}from"./utilities.js"

import{btnNew,btnNewDos,btnNewTres,btnNewCuatro,btnNewCinco}from"./utilities.js";

let contador = 0;


const iniciarQuiz = () => {
    fetch('https://restcountries.com/v3.1/all')

        .then(response => response.json())
        .then(data => {

            let element = document.getElementById('juego');

            element.innerHTML = `
        <p>La capital de ${data[78].name.common}  es: </p>
        `
            btnuno.innerText = `${data[78].capital}`


        })
        .catch(err => console.log(err));

    btndos.innerText = "San José";
    btntres.innerText = "Bogotá";
    btncuatro.innerText = "Asunción";



    btnuno.addEventListener("click", respuestaCorrecta);
    btndos.addEventListener("click", respuestaIncorrectaDos)
    btntres.addEventListener("click", respuestaIncorrectaTres)
    btncuatro.addEventListener("click", respuestaIncorrectaCuatro)

    btnNew.addEventListener("click", preguntaDos);

}


function respuestaCorrecta() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btnNew").style.display = "inline"
    contador = contador + 1;
}

function respuestaIncorrectaDos() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btndos").style.backgroundColor = "Red";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btndos").style.color = "white";
    document.getElementById("btnNew").style.display = "inline"

}

function respuestaIncorrectaTres() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btntres").style.backgroundColor = "Red";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btntres").style.color = "white";
    document.getElementById("btnNew").style.display = "inline"

}

function respuestaIncorrectaCuatro() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btncuatro").style.backgroundColor = "Red";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNew").style.display = "inline"

}

function regresarBotones() {
    document.getElementById("btnuno").style.backgroundColor = "white";
    document.getElementById("btnuno").style.color = "#6066D0";
    document.getElementById("btnuno").style.borderColor = "#6066D0;"

    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";
    document.getElementById("btndos").style.borderColor = "#6066D0;"

    document.getElementById("btntres").style.backgroundColor = "white";
    document.getElementById("btntres").style.color = "#6066D0";
    document.getElementById("btntres").style.borderColor = "#6066D0;"

    document.getElementById("btncuatro").style.backgroundColor = "white";
    document.getElementById("btncuatro").style.color = "#6066D0";
    document.getElementById("btncuatro").style.borderColor = "#6066D0;"



}
/*---------------->*/

function preguntaDos() {

    regresarBotones();
    document.getElementById("btnNew").style.display = "none"

    fetch('https://restcountries.com/v3.1/all')

        .then(response => response.json())
        .then(data => {

            console.log(data);

            let element = document.getElementById('juego');

            element.innerHTML = `
        <img>Esta Bandera es de ${data[152].flag}  es: </img>
        `
            btndos.innerText = `${data[152].name.common}`


        })
        .catch(err => console.log(err));

    btnuno.innerText = "Mexico";
    btntres.innerText = "Egipto";
    btncuatro.innerText = "Portugal";

    btnuno.addEventListener("click", respuestaDosIncorrectaUno)
    btndos.addEventListener("click", respuestaDosCorrecta);
    btntres.addEventListener("click", respuestaDosCorrectaTres)
    btncuatro.addEventListener("click", respuestaDosIncorrectaCuatro)

    btnNewDos.addEventListener("click", preguntaTres);


}

function respuestaDosIncorrectaUno() {
    document.getElementById("btndos").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.backgroundColor = "Red";
    document.getElementById("btndos").style.color = "white";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btnNewDos").style.display = "inline"

}

function respuestaDosCorrecta() {
    document.getElementById("btnuno").style.backgroundColor = "white";
    document.getElementById("btnuno").style.color = "#6066D0";
    document.getElementById("btndos").style.backgroundColor = "Green";
    document.getElementById("btndos").style.color = "white";
    document.getElementById("btnNewDos").style.display = "inline"
    contador = contador + 1;
}

function respuestaDosCorrectaTres() {
    document.getElementById("btnuno").style.backgroundColor = "white";
    document.getElementById("btnuno").style.color = "#6066D0";
    document.getElementById("btndos").style.backgroundColor = "Green";
    document.getElementById("btntres").style.backgroundColor = "Red";
    document.getElementById("btndos").style.color = "white";
    document.getElementById("btntres").style.color = "white";
    document.getElementById("btnNewDos").style.display = "inline"
}

function respuestaDosIncorrectaCuatro() {
    document.getElementById("btnuno").style.backgroundColor = "white";
    document.getElementById("btnuno").style.color = "#6066D0";
    document.getElementById("btndos").style.backgroundColor = "Green";
    document.getElementById("btncuatro").style.backgroundColor = "Red";
    document.getElementById("btndos").style.color = "white";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNewDos").style.display = "inline"
}
/*--------------------->*/

function preguntaTres() {

    regresarBotones();
    document.getElementById("btnNewDos").style.display = "none"



    fetch('https://restcountries.com/v3.1/all')

        .then(response => response.json())
        .then(data => {

            let element = document.getElementById('juego');

            element.innerHTML = `
        <p>${data[225].languages.jpn}  es el Idioma oficial de </p>
        `
            btncuatro.innerText = `${data[225].name.common}`

        })
        .catch(err => console.log(err));

    btnuno.innerText = "Chile";
    btndos.innerText = "España";
    btntres.innerText = "Australia";

    console.log(contador);

    btnuno.addEventListener("click", respuestaTresIncorrectaUno);
    btndos.addEventListener("click", respuestaTresIncorrectaDos)
    btntres.addEventListener("click", respuestaTresIncorrectaTres)
    btncuatro.addEventListener("click", respuestaTresCorrectaTres)

    btnNewTres.addEventListener("click", preguntaCuatro);


}


function respuestaTresIncorrectaUno() {
    document.getElementById("btnuno").style.backgroundColor = "red";
    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";
    document.getElementById("btncuatro").style.backgroundColor = "green";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNewTres").style.display = "inline"
}

function respuestaTresIncorrectaDos() {
    document.getElementById("btndos").style.backgroundColor = "red";
    document.getElementById("btncuatro").style.backgroundColor = "green";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNewTres").style.display = "inline"
}

function respuestaTresIncorrectaTres() {
    document.getElementById("btntres").style.backgroundColor = "red";
    document.getElementById("btncuatro").style.backgroundColor = "green";
    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNewTres").style.display = "inline"
}

function respuestaTresCorrectaTres() {

    document.getElementById("btncuatro").style.backgroundColor = "green";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";
    document.getElementById("btnNewTres").style.display = "inline"

    contador = contador + 1;

}

/*------------------->*/

function preguntaCuatro() {
    regresarBotones();
    document.getElementById("btnNewTres").style.display = "none"



    fetch('https://restcountries.com/v3.1/all')

        .then(response => response.json())
        .then(data => {

            let element = document.getElementById('juego');

            element.innerHTML = `
        <p>${data[155].name.common}  se encuentra en el continente </p>
        `
            btntres.innerText = `${data[155].region}`

        })
        .catch(err => console.log(err));

    btnuno.innerText = "NorteAmerica";
    btndos.innerText = "Africa";
    btncuatro.innerText = "Europa";

    console.log(contador);

    btnuno.addEventListener("click", respuestaCuatroIncorrectaUno);
    btndos.addEventListener("click", respuestaCuatroIncorrectaDos)
    btntres.addEventListener("click", respuestaCuatroCorrectaTres)
    btncuatro.addEventListener("click", respuestaCuatroIncorrectaCuatro)

    btnNewCuatro.addEventListener("click", preguntaCinco);


}

function respuestaCuatroIncorrectaUno() {
    document.getElementById("btnuno").style.backgroundColor = "red";
    document.getElementById("btncuatro").style.backgroundColor = "Green";
    document.getElementById("btncuatro").style.color = "white";
    document.getElementById("btnNewCuatro").style.display = "inline"
}

function respuestaCuatroIncorrectaDos() {
    document.getElementById("btndos").style.backgroundColor = "red";
    document.getElementById("btntres").style.backgroundColor = "Green";
    document.getElementById("btntres").style.color = "white";
    document.getElementById("btncuatro").style.backgroundColor = "white"
    document.getElementById("btncuatro").style.color = "#6066D0"

    document.getElementById("btnNewCuatro").style.display = "inline"

}

function respuestaCuatroCorrectaTres() {

    document.getElementById("btntres").style.backgroundColor = "Green";
    document.getElementById("btntres").style.color = "white";
    document.getElementById("btncuatro").style.backgroundColor = "white"
    document.getElementById("btncuatro").style.color = "#6066D0";
    document.getElementById("btnNewCuatro").style.display = "inline"

}

function respuestaCuatroIncorrectaCuatro() {
    document.getElementById("btntres").style.backgroundColor = "Green";
    document.getElementById("btntres").style.color = "white";
    document.getElementById("btncuatro").style.backgroundColor = "Red";
    document.getElementById("btnNewCuatro").style.display = "inline"

}

/*-------------------->*/

function preguntaCinco() {

    regresarBotones();
    document.getElementById("btnNewCuatro").style.display = "none"



    fetch('https://restcountries.com/v3.1/all')

        .then(response => response.json())
        .then(data => {

            let element = document.getElementById('juego');

            element.innerHTML = `
        <p>${data[5].name.common}: Su nombre oficial es: </p>
        `
            btnuno.innerText = `${data[5].name.nativeName.spa.official}`

        })
        .catch(err => console.log(err));

    btndos.innerText = "Mexico";
    btntres.innerText = "Tierra Azteca";
    btncuatro.innerText = "Nueva España";

    console.log(contador);

    btnuno.addEventListener("click", respuestaCincoCorrectaUno);
    btndos.addEventListener("click", respuestaCincoIncorrectaDos)
    btntres.addEventListener("click", respuestaCincoIncorrectaTres)
    btncuatro.addEventListener("click", respuestaCincoIncorrectaCuatro)

    btnNewCinco.addEventListener("click", final)

}

function respuestaCincoCorrectaUno() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.color = "white";
    document.getElementById("btncuatro").style.backgroundColor = "white";
    document.getElementById("btncuatro").style.color = "#6066D0";
    document.getElementById("btnNewCinco").style.display = "inline"

    contador = contador + 1;
}

function respuestaCincoIncorrectaDos() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.color = "white";

    document.getElementById("btntres").style.backgroundColor = "white";
    document.getElementById("btntres").style.color = "#6066D0";

    document.getElementById("btncuatro").style.backgroundColor = "white";
    document.getElementById("btncuatro").style.color = "#6066D0";

    document.getElementById("btndos").style.backgroundColor = "Red";


    document.getElementById("btnNewCinco").style.display = "inline"

}

function respuestaCincoIncorrectaTres() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.color = "white";

    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";

    document.getElementById("btncuatro").style.backgroundColor = "white";
    document.getElementById("btncuatro").style.color = "#6066D0";

    document.getElementById("btntres").style.backgroundColor = "Red";


    document.getElementById("btnNewCinco").style.display = "inline"

}

function respuestaCincoIncorrectaCuatro() {
    document.getElementById("btnuno").style.backgroundColor = "Green";
    document.getElementById("btnuno").style.color = "white";

    document.getElementById("btndos").style.backgroundColor = "white";
    document.getElementById("btndos").style.color = "#6066D0";

    document.getElementById("btntres").style.backgroundColor = "white";
    document.getElementById("btntres").style.color = "#6066D0";

    document.getElementById("btncuatro").style.backgroundColor = "Red";


    document.getElementById("btnNewCinco").style.display = "inline"

}

/*------------------>*/

function final() {

    document.getElementById("botones").style.display = "none";
    document.getElementById("juego").style.visibility = "hidden";

    resultados.innerHTML = "<p> Resultado </p>";
    resultadosDos.innerHTML = "<p>Aciertos: </p>" + contador;

    document.getElementById("tryAgain").style.display = "inline";

    document.getElementById("imagenes").innerHTML = "<img src=winner.svg>"

    tryAgain.addEventListener("click", iniciarQuiz);

}

iniciarQuiz();