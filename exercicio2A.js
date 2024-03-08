// Exercício 2a) Implemente utilizando if / else

const prompt = require("prompt-sync")();
let horas = prompt("Quantas horas? ");
let saida = prompt("Digite 'mm' para converter as horas em minutos ou 'ss' para converte horas e segundos: ")

if (saida === 'MM' || saida === 'mm') {
    horasEmMinutos = horas * 60;
    console.log(horas + " horas equivalem a " + horasEmMinutos + " minutos");
} else if (saida === 'SS' || saida === 'ss'){
    horasEmSegundos = horas * 3600;
    console.log(horas + " horas equivalem a " + horasEmSegundos + " segundos");
} else {
    console.log("Não foi possível realizar a operação");
}