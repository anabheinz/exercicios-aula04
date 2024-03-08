// Exercício 2b) Implemente utilizando swich / case com o auxílio do break.

const prompt = require("prompt-sync")();
let horas = prompt("Quantas horas? ");
let saida = prompt("Digite 'mm' para converter as horas em minutos ou 'ss' para converte horas e segundos: ")

horasEmMinutos = horas*60
horasEmSegundos = horas*3600

switch(saida) {
    case 'mm':
        console.log(horas + " horas equivalem a " + horasEmMinutos + " minutos");
        break;
    case 'MM':
        console.log(horas + " horas equivalem a " + horasEmMinutos + " minutos");
        break;
    case 'ss':
        console.log(horas + " horas equivalem a " + horasEmSegundos + " segundos");
        break;
    case 'SS':
        console.log(horas + " horas equivalem a " + horasEmSegundos + " segundos");
        break;
    default:
        console.log("Não foi possível realizar a operação")
}

// //Exemplo 02

// const prompt = require("prompt-sync")();
// let horas = prompt("Quantas horas? ");
// let saida = prompt("Digite 'mm' para converter as horas em minutos ou 'ss' para converte horas e segundos: ")

// horasEmMinutos = horas*60
// horasEmSegundos = horas*3600

// switch(saida) {
//     case 'mm':
//     case 'MM':
//         console.log(horas + " horas equivalem a " + horasEmMinutos + " minutos");
//         break;
//     case 'ss':
//     case 'SS':
//         console.log(horas + " horas equivalem a " + horasEmSegundos + " segundos");
//         break;
//     default:
//         console.log("Não foi possível realizar a operação")
// }