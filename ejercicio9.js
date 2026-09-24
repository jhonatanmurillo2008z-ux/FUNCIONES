/*En un grupo de N aprendices se lee, uno por uno, el género (H o M) y la edad. Mostrar cuántos
hombres y cuántas mujeres hay, el promedio de edad de los hombres, el de las mujeres y el de
todo el grupo.
Si no hay hombres o no hay mujeres, mostrar un mensaje en lugar de calcular ese promedio.*/

function esHombre(genero) {
    return genero == "H";
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let cantidadPersonas = parseInt(prompt("¿Cuántas personas?:"));

let hombres = 0;
let mujeres = 0;

let sumaEdadHombres = 0;
let sumaEdadMujeres = 0;
let sumaEdadGrupo = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
    let genero = prompt("Género persona " + i + " (H/M):").toUpperCase();
    let edad = parseInt(prompt("Edad persona " + i + ":"));

    sumaEdadGrupo = sumaEdadGrupo + edad;

    if (esHombre(genero)) {
        hombres++;
        sumaEdadHombres = sumaEdadHombres + edad;
    } else {
        mujeres++;
        sumaEdadMujeres = sumaEdadMujeres + edad;
    }
}

if (hombres > 0) {
    let promedioHombres = calcularPromedio(sumaEdadHombres, hombres);
    console.log("Hombres: " + hombres + " | Promedio de edad: " + promedioHombres);
} else {
    console.log("Hombres: 0 | No hay hombres para calcular el promedio");
}

if (mujeres > 0) {
    let promedioMujeres = calcularPromedio(sumaEdadMujeres, mujeres);
    console.log("Mujeres: " + mujeres + " | Promedio de edad: " + promedioMujeres);
} else {
    console.log("Mujeres: 0 | No hay mujeres para calcular el promedio");
}

let promedioGrupo = calcularPromedio(sumaEdadGrupo, cantidadPersonas);

console.log("Promedio del grupo: " + promedioGrupo);