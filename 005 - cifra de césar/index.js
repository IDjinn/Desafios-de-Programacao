/*
005 - Cifra de César

Escreva um programa que receba uma string, uma chave e retorne o texto codificado usando a Cifra de César[1].

*/

const chave = 3;
console.log('password'.toLowerCase().split('').map(str => {
    let code = str.charCodeAt(0);
    return code >= 65 && code <= 90 ? String.fromCharCode((code - 65 + chave) % 26 + 65) : code !== 32 ? String.fromCharCode((code - 97 + chave) % 26 + 97) : String.fromCharCode(code);
}).join(''));