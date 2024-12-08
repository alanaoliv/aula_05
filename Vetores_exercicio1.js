const leia = require('readline-sync');

//Criação de Vetor
let vetorNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
 
let vetor = new Array(10);

for(let contador = 0; contador < vetor.length; contador++){;
    let numero = leia.questionInt("Escolha um numero: ");

    if(numero > 0 && numero <= 10){
        let posicao = vetorNumeros.indexOf(numero);

        console.log(`\nA posição do número ${numero} é: ${posicao}`)
    }else if(numero <= 0 || numero > 10){
        console.log(`\nO número ${numero} não foi encontrado!`)
    }
    process.exit(0)
}


