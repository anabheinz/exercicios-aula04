//Exercício 01

const prompt = require("prompt-sync")();
let nota = Number(prompt("Qual a sua nota? "));

if (nota >= 9) 
    console.log("Sua menção é SS");
else if(nota >=7 && nota < 9)
    console.log("Sua menção é MS");
else if (nota >= 5 && nota < 7)
    console.log("Sua menção é MM");
else
    console.log("Aluno reprovado!")