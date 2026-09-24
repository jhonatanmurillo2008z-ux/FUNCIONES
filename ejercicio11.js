/*El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
cuántos intentos lo logró. Si pierde, mostrar cuál era el número.*/

function generarNumeroSecreto(minimo, maximo) {
    return Math.floor(Math.random() * 100) + 1;
}

function evaluarIntento(intento, secreto) {
    if (intento > secreto) {
        return "mayor";
    } else if (intento < secreto) {
        return "menor";
    } else {
        return "correcto";
    }
}

let secreto = generarNumeroSecreto(1, 100);
let intentos = 0;
let correcto = false;

while (intentos < 7 && correcto == false) {
    let intento = parseInt(prompt("Intento " + (intentos + 1) + ":"));
    intentos++;

    let resultado = evaluarIntento(intento, secreto);

    if (resultado == "mayor") {
        console.log("El número secreto es menor");
    } else if (resultado == "menor") {
        console.log("El número secreto es mayor");
    } else {
        console.log("¡Adivinaste en " + intentos + " intentos!");
        correcto = true;
    }
}

if (correcto == false) {
    console.log("Perdiste. El número secreto era: " + secreto);
}