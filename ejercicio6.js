/*Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
trabajadas de cada obrero.
Si el obrero trabaja 40 horas o menos, se le paga $12.000 por hora. Si trabaja más de 40, se le
pagan $12.000 por cada una de las primeras 40 horas y $15.000 por cada hora extra. Mostrar
el salario de cada obrero y el total de la nómina.*/
function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    } else {
        return 0;
    }
}

function calcularSalarioSemanal(horas) {
    let salario;

    if (horas <= 40) {
        salario = horas * 12000;
    } else {
        let horasExtra = calcularHorasExtra(horas);
        salario = (40 * 12000) + (horasExtra * 15000);
    }

    return salario;
}

let cantidadObreros = parseInt(prompt("¿Cuántos obreros?"));
let totalNomina = 0;

for (let i = 1; i <= cantidadObreros; i++) {
    let horas = parseInt(prompt("Horas obrero " + i + ":"));

    let salario = calcularSalarioSemanal(horas);

    console.log("Obrero " + i + ": " + salario);

    totalNomina = totalNomina + salario;
}

console.log("Total nómina: " + totalNomina);