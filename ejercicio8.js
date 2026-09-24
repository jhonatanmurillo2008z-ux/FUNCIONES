/*Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
que más contaminó.*/

function obtenerMenor(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function obtenerMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let suma = 0;
let menor;
let mayor;

for (let i = 1; i <= 25; i++) {
    let puntos = parseFloat(prompt("Puntos auto " + i + ":"));

    suma = suma + puntos;

    if (i == 1) {
        menor = puntos;
        mayor = puntos;
    } else {
        menor = obtenerMenor(menor, puntos);
        mayor = obtenerMayor(mayor, puntos);
    }
}

let promedio = calcularPromedio(suma, 25);

console.log("Promedio: " + promedio);
console.log("Menor contaminación: " + menor);
console.log("Mayor contaminación: " + mayor);