/*Leer 20 números e imprimir cuántos son positivos, cuántos negativos y cuántos son cero.*/

let numeros = [];

for (let i = 0; i < 20; i++) {
    numeros[i] = parseInt(prompt("Ingrese un número"));
}

let positivos = 0;
let negativos = 0;
let cero = 0;

for (let i = 0; i < 20; i++) {
    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    } else {
        cero++;
    }
}

console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);
console.log("Cero: " + cero);