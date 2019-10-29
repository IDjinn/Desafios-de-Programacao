/*
[009] - Numeros decrescentes (by: @blackfloyd )

Seu objetivo é pegar um inteiro não-negativo e transforma-lo em um outro inteiro, porem com os numeros em forma decrescente.

*/
console.log(Number.MAX_SAFE_INTEGER.toString().split('').sort((a, b) => a - b).reverse().join(''));