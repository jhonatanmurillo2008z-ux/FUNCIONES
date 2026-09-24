


/*Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
multiplicando, el multiplicador y el producto.*/

let numero = prompt("Introduce un número");

for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + numero + " = " + i * numero);
}

function multiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + " * " + numero + " = " + i * numero);
    }
}

mostrarTabla(numero);
