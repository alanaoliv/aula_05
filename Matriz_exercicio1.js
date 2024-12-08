const leia = require('readline-sync');

//Declaração
let matrizInteiros = new Array(3);
let num = matrizInteiros.length;

//Inicio 
for(let indice = 0; indice < matrizInteiros.length; indice++ ){
    matrizInteiros[indice] = Array(3);
}

//Indices das Colunas
for(let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("\nDigite um numero: ")
    }

}

//Inicio das saidas

//Diagonal Primaria
let resultado1 = "";

for(let contador = 0; contador < matrizInteiros.length; contador++){
    resultado1 += matrizInteiros[contador][contador] + " ";
}
console.log(`\nElementos da Diagonal principal: ${resultado1} `);

//Diagonal Secundaria
let resultado2 = "";

for(let contador = 0; contador < num; contador++){
    resultado2 += matrizInteiros[contador][num - 1 - contador] + " ";
}
console.log(`\nElementos da Diagonal secundária: ${resultado2}`)

//Inicio Somas
let soma1 = 0;
let soma2 = 0;

//Soma Diagonal Primaria
for(let contador = 0; contador < matrizInteiros.length; contador++){
    soma1 += matrizInteiros[contador][contador];
}
console.log(`\nSoma dos Elementos da Diagonal principal: ${soma1}`);

//Soma Diagonal Secundaria
for(let contador = 0; contador < num; contador++){
    soma2 += matrizInteiros[contador][num - 1 - contador];
}
console.log(`\nSoma dos Elementos da Diagonal secundária: ${soma2} `)