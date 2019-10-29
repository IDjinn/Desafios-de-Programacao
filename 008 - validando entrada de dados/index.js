/*
[008] - Validando entrada de dados

Crie um programa que crie uma função, usarei como exemploleiaInt(), que vai funcionar de forma semelhante à função input() do Python, só que fazendo a validação para aceitar apenas um valor numérico.

*/
const readline = require('readline-sync');

const input = readline.question('Insira um número: ');
console.log(`'${input}' ${isNaN(input) ? 'não é' : 'é'} um número válido.`);