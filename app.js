alert("Bem vindo ao jogo, tente acertar o numero e ganhe um abraço!");
var numeroSecreto = 17;

var Chance = prompt('escolha um numero entre 1 e 35');

console.log("o numero secreto é o ", numeroSecreto)

 

if ( Chance == 17 ){

    alert('boa amigo você conseguiu! o numero secreto ero o ' + numeroSecreto + 'toma o teu abreço virtual <3');
}

else {
    if  ( numeroSecreto > Chance) {
        alert("O numero secreto é maior que o chute")
}
    else {
        alert("o numero secreto é menor");
    }
}