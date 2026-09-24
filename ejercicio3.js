/*Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
promedio en °C.*/

function convertirAKelvin(c) {
    return c + 273.15;
}

function convertirAFahrenheit(c) {
    return c * 9 / 5 + 32;
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let dias = Number(prompt("¿Cuántos días son?"));
let suma = 0;

for (let i = 1; i <= dias; i++) {
    let c = Number(prompt("Temperatura día " + i + ":"));

    console.log("Día " + i + ": " + c + " °C = " +
        convertirAKelvin(c) + " K = " +
        convertirAFahrenheit(c) + " °F");

    suma += c;
}

console.log("Promedio: " + calcularPromedio(suma, dias) + " °C");