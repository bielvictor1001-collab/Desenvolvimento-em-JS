// // let nome  =  prompt('Digite seu nome:  ')

// let btn =  document.getElementById("btn")

// // decisões  -> tomada de decisão
// // condiçao esta no parenteses
// // decisão esta nas chaves

// btn.addEventListener("click", function () {
// let dado = document.getElementById("texto").value.toString()


// if (dado == "Julia"){
    


//         console.log('Seja bem vinda 1 ' + dado)
    

// }
// else if(dado == "Carlos"){

    

//         console.log('Seja bem vindo 2  ' + dado)
    


    

// }else{



//         console.log('Seja bem vindo 3 ' + dado)
    

// }
// });



// let ano_nascimento  =  prompt('Digite o ano:  ')


// if (ano_nascimento >= 2020){

// console.log('Você tem 26 ou mais')


// }else{

//     console.log('Você provavelmente tem mais que 26 anos ')

// }




// let cidade =  prompt('Digite a cidade:  ')



// if (cidade  ==='Guarulhos'){
// console.log('Nossa cidade, cidade de  ' +  cidade)
// }
// else if (cidade  === 'São Paulo' ){
// console.log('Cidade da garoa cidade de  ' + cidade )
// }
// else{
// console.log('Qualquer outra cidade, cidade de  ', cidade)
// }



// let carta_motorista  =  prompt('Possui carta de motorista? s / n')
// let idade =  prompt('Idade: ')

// if (carta_motorista == 's' && idade >= 18){
    
        
//       alert('Pode dirigir!')

    
// }else{

//   console.log('Não pode dirigir!')

// }






// if (carta_motorista == 's'){
//     if (idade >= 18) {
        
//       console.log('Pode dirigir!')

//     }
// }else{

//   console.log('Não pode dirigir!')

// }



//let modelo  = prompt('DIGITE O MODELO DO VEÍCULO: ')
// let//t valor = prompt('QUAL VALOR DESEJA INVESTIR: ')
//let corVeiculo = prompt('QUAL COR VOCÊ ACHA INTERESSANTE')



//if (modelo === 'Jeep' && valor <= 70000 && corVeiculo == 'preta'  ){


//    console.log('Mande a proposta do financiamento!')


//}else if (modelo != 'Jeep' && valor <= 70000 && corVeiculo == 'preta'){

  //  console.log('Seria interessante conversar com o vendedor')

//}else if (modelo != 'Jeep' && valor > 70000 && corVeiculo =='preta' ){

  //  console.log('Envie as fotos do veículo')

//} else{

//console.log('Não optante')

//}



// ao dividir 10 % por 2 o resto é zero?
// 10 % 2 == 0 

//DIGITE UM NÚMERO
let numero = prompt("Digite um número:");

numero = Number(numero);

if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else if (numero === 0) {
    alert("O número é zero.");
} else {
    alert("Valor inválido. Por favor, digite um número.");
}


//DIGITE A SUA IDADE
let idade = prompt('qual é a sua idade:');

if (idade >= 18) {
    alert('voce pode votar. ');
} else if (idade <18) {
    alert('voce não pode votar');
}



let numero = 7; // você pode alterar para qualquer número

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

