
alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');
// se o chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto})`);
} else {
    alert('Você errou :(');
}

/*
alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
nome = prompt('Qual o seu nome?');
idade = prompt('Qual a sua idade?');
if (idade > 18) {
    alert('Pode tirar a habilitação!')
}
*/