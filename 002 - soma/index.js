/*
002 - Soma

Escreva um programa que receba como primeiro argumento (teu_programa arquivo.txt) o nome de um arquivo de texto cujo conteúdo é uma lista de números inteiros, um em cada linha, e imprima a soma de todos eles.

*/

const { readFileSync } = require('fs');
console.log(readFileSync('./arquivo.txt', 'utf-8').split('\r').reduce((previous, current) => {
    return previous + parseInt(current);
},0));