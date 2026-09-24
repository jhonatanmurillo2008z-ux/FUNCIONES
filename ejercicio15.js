/*Leer un número N. Mostrar todos los números primos entre 2 y N, y al final cuántos hay.
Un número es primo si solo es divisible entre 1 y entre sí mismo. Para saber si n es divisible
entre d usa n % d === 0.*/

function contarDivisores(numero) {
    let divisores = 0;

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }

    return divisores;
}

function esPrimo(numero) {
    return contarDivisores(numero) === 2;
}

let limite = parseInt(prompt("Límite:"));
let cantidadPrimos = 0;

for (let i = 2; i <= limite; i++) {
    if (esPrimo(i)) {
        console.log(i);
        cantidadPrimos++;
    }
}

console.log("Cantidad de primos: " + cantidadPrimos);