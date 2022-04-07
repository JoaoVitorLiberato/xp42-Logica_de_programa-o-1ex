//ex 1
let nomeCompleto = "João Vitor Liberato de Oliveira"
console.log(nomeCompleto);

//ex 2
let numeroA = 10, numeroB = 20;
let resultado = numeroA * numeroB;
console.log(resultado);

//ex 3
function saudacao() {

    return "Oi eu sou o Goku";

}

console.log(saudacao());


//ex 4
function multiplica(n1, n2) {
    return n1 * n2;
}

console.log(multiplica(10, 20));

//ex 5
function podeDirigir(idade) {

    if (idade >= 18) {
        console.log("Você pode dirigir");
    } else {
        console.log("Você não pode digirir");
    }

}
console.log(podeDirigir(18))


//ex 6
for (let i = 0; i <= 20; i++) {
    console.log(i);
}

//ex 7
for(let j = 1; j < 20; j++){
    if(j % 2 != 0){
        console.log(j);
    }
}


function tabuada(){
    for(let c = 1; c <= 10; c++){
        let calculo, num;
        calculo = num * num;
        console.log(calculo)
    }
    
}

console.log(tabuada(5))



