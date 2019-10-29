/*
004 - Chess Travel (desafio by: @blackfloyd )

Tenha em mente o seguinte tabuleiro 8x8:

    01 02 03 04 05 06 07 08
    -----------------------
 A | 01 02 03 04 05 06 07 08
 B | 09 10 11 12 13 14 15 16
 C | 17 18 19 20 21 22 23 24
 D | 25 26 27 28 29 30 31 32
 E | 33 34 35 36 37 38 39 40
 F | 41 42 43 44 45 46 47 48
 G | 49 50 51 52 53 54 55 56
 H | 57 58 59 60 61 62 63 64

Faça com que o programa leia um inteiro entre 1 e 8 e um caractere entre A e H. Feito isso, calcule que posição essa coordenada corresponde no mapa do tabuleiro e mostre o numero dessa posição para o usuario.

*/

const readline = require('../node_modules/readline-sync');
const numero = readline.questionInt('Insira o número: ');
const letra = readline.question('Insira a letra: ');
console.log(`A posição é ${numero * (letra.toLowerCase().charCodeAt(0) - 96)}`);
