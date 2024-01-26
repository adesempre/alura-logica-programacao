function fluxoPadrao() {
  alert("Boas vindas ao jogo do número secreto!");
  let numeroSecreto = 29;
  console.log(numeroSecreto);
  let chute;
  // enquanto o chute não for
  while (numeroSecreto != chute && chute != 0) {
    chute = prompt("Escolha um número entre 1 e 30. Ou 0 (zero) para desistir");
    if (chute != 0) {
      if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto})`);
      } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
      } else {
        alert(`O número secreto é maior que ${chute}`);
      }
    }
  }
}

function desafioAula01() {
  alert("Boas vindas ao nosso site!");
  let nome = "Lua";
  let idade = 25;
  let numeroDeVendas = 50;
  let saldoDisponivel = 1000;
  alert("Erro! Preencha todos os campos");
  let mensagemDeErro = "Erro! Preencha todos os campos";
  nome = prompt("Qual o seu nome?");
  idade = prompt("Qual a sua idade?");
  if (idade > 18) {
    alert("Pode tirar a habilitação!");
  }
}

function desafioAula02() {
  let pontos = 0;
  let diaDaSemana = prompt("Qual o dia da semana?");
  if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    pontos += 90;
    alert("Bom final de semana!");
  }
  let numero = prompt("Agora digite um número qualquer");
  if (numero < 0) {
    pontos -= numero;
    alert("O número é negativo!");
  } else {
    alert("O número é positivo");
  }
  if (pontos > 100) {
    alert("Parabéns, você venceu!");
  } else {
    alert("Tente novamente para ganhar");
  }
  let saldo = pontos * 2;
  alert(`O saldo da sua conta é ${saldo}`);
  let nome = prompt("Qual o seu nome?");
  alert(`Bem vindo, ${nome}`);
}

fluxoPadrao();
