/*Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde la última
reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10 básculas distintas
para obtener un promedio.
Si el promedio es mayor que el peso anterior, imprimir "SUBIÓ" y los kilos. Si es menor,
imprimir "BAJÓ" y los kilos. Si es igual, imprimir "SE MANTUVO". Los kilos siempre se
muestran en positivo, sin usar Math.abs.*/

function leerPromedioBasculas(cantidadBasculas) {
    let suma = 0;

    for (let i = 1; i <= cantidadBasculas; i++) {
        let peso = parseFloat(prompt("Báscula " + i + ":"));
        suma = suma + peso;
    }

    return suma / cantidadBasculas;
}

function obtenerValorAbsoluto(numero) {
    if (numero < 0) {
        return numero * -1;
    } else {
        return numero;
    }
}

function generarLetrero(diferencia) {
    if (diferencia > 0) {
        return "SUBIÓ";
    } else if (diferencia < 0) {
        return "BAJÓ";
    } else {
        return "SE MANTUVO";
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("Miembro " + i);

    let pesoAnterior = parseFloat(prompt("Peso anterior:"));
    let promedio = leerPromedioBasculas(10);

    let diferencia = promedio - pesoAnterior;
    let letrero = generarLetrero(diferencia);

    if (diferencia != 0) {
        let kilos = obtenerValorAbsoluto(diferencia);
        console.log(letrero + " " + kilos + " kg");
    } else {
        console.log(letrero);
    }
}