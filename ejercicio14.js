/*Un cajero registra los precios de los artículos de cada cliente. Un precio de 0 cierra la cuenta de
ese cliente y se muestra su total. Después se pregunta si hay otro cliente (S/N).
Al final del día mostrar: cuántos clientes se atendieron, el total cobrado y cuál cliente hizo la
compra más alta (número de cliente y monto).*/

function atenderCliente(numeroCliente) {
    let totalCliente = 0;
    let precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));

    while (precio != 0) {
        totalCliente = totalCliente + precio;

        precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));
    }

    console.log("Total cliente " + numeroCliente + ": " + totalCliente);

    return totalCliente;
}

function hayOtroCliente() {
    let respuesta = prompt("¿Hay otro cliente? (S/N):").toUpperCase();

    if (respuesta == "S") {
        return true;
    } else {
        return false;
    }
}

let numeroCliente = 1;
let clientesAtendidos = 0;
let totalDia = 0;
let compraMasAlta = 0;
let clienteCompraMasAlta = 0;
let continuar = true;

while (continuar) {
    console.log("Cliente " + numeroCliente);

    let totalCliente = atenderCliente(numeroCliente);

    clientesAtendidos++;
    totalDia = totalDia + totalCliente;

    if (totalCliente > compraMasAlta) {
        compraMasAlta = totalCliente;
        clienteCompraMasAlta = numeroCliente;
    }

    continuar = hayOtroCliente();
    numeroCliente++;
}

console.log("Clientes atendidos: " + clientesAtendidos);
console.log("Total cobrado: " + totalDia);
console.log(
    "Compra más alta: cliente " +
    clienteCompraMasAlta +
    " con " +
    compraMasAlta
);