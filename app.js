function fluxoPadrao() {
  const NUMERO_MAXIMO = 1000;
  alert("Boas vindas ao jogo do número secreto!");
  let numeroSecreto = parseInt(Math.random() * NUMERO_MAXIMO) + 1;
  let tentativas = 0;
  console.log(numeroSecreto);
  let chute;
  // enquanto o chute não for
  while (numeroSecreto != chute && chute != 0) {
    chute = prompt(
      `Escolha um número entre 1 e ${NUMERO_MAXIMO}. Ou 0 (zero) para desistir`
    );
    tentativas++;
    if (chute != 0) {
      if (chute == numeroSecreto) {
        break;
      } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
      } else {
        alert(`O número secreto é maior que ${chute}`);
      }
    }
  }
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(
      `Isso aí! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`
    );
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

function desafioAula03() {
  let contador1 = 1;
  while (contador1 <= 10) {
    console.log("contador 1", contador1);
    contador1++;
  }
  let contador2 = 10;
  while (contador2 >= 0) {
    console.log("contador 2", contador2);
    contador2--;
  }
  let numeroInformado = prompt("informe um número");
  for (let i = numeroInformado; i >= 0; i--) {
    console.log("voltando...", i);
  }
  for (let i = 0; i <= numeroInformado; i++) {
    console.log("indo...", i);
  }
}

function desafioAula04() {
  console.log("Bem vindo!");
  let nome = "Thiago";
  console.log(`Olá, ${nome}!`);
  alert(`Olá, ${nome}!`);
  let linguagem = prompt(
    "Qual a linguagem de programação que você mais gosta?"
  );
  let valor1 = 2024;
  let valor2 = 26;
  let resultado = valor1 + valor2;
  console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
  console.log(
    `A diferença entre ${valor1} e ${valor2} é igual a ${valor1 - valor2}`
  );
  let idade = prompt("Qual sua idade?");
  console.log(
    `${nome}, que gosta de ${linguagem} é ${
      idade < 18 ? "menor" : "maior"
    } de idade`
  );
  let numero = prompt("Informe um número");
  if (numero == 0) {
    console.log("O número é o zero");
  } else if (numero < 0) {
    console.log("O número é negativo");
  } else {
    console.log("O número é positivo");
  }
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  let nota = parseInt(Math.random() * 10) + 1;
  console.log(nota < 7 ? "Reprovado" : "Aprovado");
  console.log("Random", Math.random());
  console.log("Random entre 1 e 10", parseInt(Math.random() * 10) + 1);
  console.log("Random entre 1 e 1000", parseInt(Math.random() * 1000) + 1);
}

fluxoPadrao();
