/*
003 - Maior Palavra (desafio by: @blackfloyd )

Escreva uma função ou método que receba um parametro do tipo String e compare qual é a maior palavra da String.

Especificações:
-Se a frase conter 2 ou mais palavras com o mesmo tamanho, retorne a primeira palavra com esse tamanho;
-A String precisa ter no minimo 2 palavras;
-Só são validos caracteres não especiais.

*/

console.log(['i', 'love', 'pizza'].reduce((previous, current) => {
    return (previous.length < current.length && current.match(/\w/) && current.length > 2) ? current : previous;
}, ''));