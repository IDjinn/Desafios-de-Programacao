/*
006 - Números Jooj (Desafio by: @jooj )

Neste desafio, vocês terão que escrever um programa que indica se um número é Jooj ou não.
Um número Jooj é um número que possui exatamente 3 divisores distintos.

*/

let numero = 100140049, i = 2, divs = [1], inicio = Date.now()
while(i <= numero){
    if(numero % i == 0) divs.push(i)
    i += 1
}
console.log(divs.length != 3 ? 'Nao eh jooj' : 'Eh jooj')
console.log(Date.now() - inicio + "ms!")