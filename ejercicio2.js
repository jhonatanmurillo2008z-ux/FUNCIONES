/*Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
suma de todos los cubos.*/

let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("ingrese un numero"));
}


function calcularCubos(a) {
    return a * a * a;

}

function calcularCuartapartes(a) {
    return a / 4;
}

let sumaCubos = 0;
for (let i = 0; i < 10; i++) {
    console.log(`Numero: ${numeros[i]}, Cubo: ${calcularCubos(numeros[i])}, Cuarta parte: ${calcularCuartapartes(numeros[i])}`);
    sumaCubos += calcularCubos(numeros[i]);
}
console.log(`Suma de todos los cubos: ${sumaCubos}`);