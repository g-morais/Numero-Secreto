alert("Bem vindo ao jogo, tente acertar o numero e ganhe um abraço!");
var numeroMaximo = 300;
var numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
var Chance;
var tentativas = 1;

console.log("o numero secreto é o ", numeroSecreto);

//looping
while (Chance != numeroSecreto) {
  Chance = prompt("escolha um numero entre 1 e " + numeroMaximo);
  // condicional de numero
  if (Chance == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > Chance) {
      alert("O numero secreto é maior que o chute:" + Chance);
    } else {
      alert("o numero secreto é menor que " + Chance);
    }
    tentativas++;
  }
}
alert("boa amigo você conseguiu! o numero com " +tentativas+ " tentativas, o numero secreto ero o " +numeroSecreto + " toma o teu abraço virtual <3" );
