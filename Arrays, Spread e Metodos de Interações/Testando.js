let valoresDiferentes = ['day', 7, 'celular' , 94];
let novoValor = [...valoresDiferentes, 'como', 15];
/*valoresDiferentes.map(valoresDiferentes => console.log(valoresDiferentes));
novoValor.map(novoValor => console.log(novoValor));*/



let filtro = novoValor.filter( novoValor => {
    if((typeof novoValor === 'number') && (novoValor % 2 === 0)){
        console.log(novoValor);
    }

}); 


let procuraObjeto = novoValor.find(novoValor => novoValor === 'celular');
console.log(procuraObjeto);

let ordena = novoValor.sort( (a, b) => {
    a-b;
    if(novoValor === 'number'){
        console.log(ordena);
    }

});


