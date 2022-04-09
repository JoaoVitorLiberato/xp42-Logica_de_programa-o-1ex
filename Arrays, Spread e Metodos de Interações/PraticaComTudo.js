const nomes = ['João', 'Denize', 'Casal'];

/*for(let i = 0; i < nomes.length; i++){
    
        console.log(nomes[i]); 
}*/

//utlizando o Spead para chamar outro array dentro de um array.
const novaArray = [...nomes, 'Marrentos'];
/*for(let contador = 0; contador < novaArray.length; contador++){
    console.log(novaArray[contador])
}*/

//Metodos de interações

//.map

novaArray.map(novaArray => console.log(novaArray));


//.filter
const num = [2, 3, 4, 5, 6];
const nPares = num.filter(num => num % 2 == 0)
console.log(nPares);

// .find
const produtos = ['geladeira', 'geladinho', 'celulares', 'camas'];
const procuraProdutos = produtos.find(produtos => produtos === 'celulares');
console.log(procuraProdutos);

//sort

const n1 = [100, 54, 73, 5, 46];
const ordena = n1.sort((elemento1, elemento2) => elemento1 - elemento2);
console.log(ordena);

//reduce

const n = [1, 23, 6];

const soma = n.reduce((vAnterior, vAtual) => {
    return vAnterior + vAtual
});

console.log(soma);