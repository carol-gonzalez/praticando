//1. Crie um programa que armazene seu nome em uma variável e imprima a mensagem "Olá, [nome]" utilizando Template String

var nome = "Carolina"
console.log(`Olá, ${nome}`)


//2. Crie um programa com duas variáveis do tipo Double e imprima a soma das mesmas

var numeroUm = 10
var numeroDois = 8
var soma = numeroUm + numeroDois
console.log(soma)


//3. Crie um programa que imprima o valor ao quadrado de um número

var numUm = 10
var numDois = 10
var operacao = numUm * numDois
console.log(operacao);

//or 

quad = Math.pow(10,2)


//4. Crie um programa que imprima o dobro de um número

var numero1 = 10
var numero2 = 2
var operacao = numero1 * numero2
console.log(operacao);


//5. Crie um programa que utilize os operadores aritméticos e imprima o antecessor e o sucessor de um número

var numberOne = 2
numberOne++
console.log(numberOne)

numberOne--
console.log(numberOne)


//6. Crie um programa que calcule e imprima o total de dias em 7 meses, considerando que cada mês tenha 30 dias

var dias = 30
var meses = 7
var resultado = dias * meses
console.log(resultado)


//7. Crie um programa que calcule e imprima a média das cinco notas de um aluno

var matematica = 8
var portugues = 7
var geografia = 9
var ciencias = 10
var fisica = 9
var op = (matematica + portugues + geografia+ ciencias + fisica)/5
console.log(op)


//8. Crie um programa que converta metros para centímetros e imprima o resultado

var metros = 0.90
var centimetros = 0
var resultado = centimetros = metros * 100
console.log (centimetros  +  'cm')


//9. Crie um programa que calcule o desconto na venda de um produto

var valorTotal = 80
var desconto = (80 * 5)/100
var total = (valorTotal - desconto) 
console.log('R$' + total)

  
//10. Crie funções para as 4 operações aritméticas básicas

var number1 = 2
var number2 = 2
function somar(){
  return number1 + number2
}
function subtrair(){
  return number1 - number2
}
function multiplicar(){
  return number1 * number2
}
function dividir(){
  return number1 / number2
} 

console.log(`A soma de ${number1} e 
${number2}`);
console.log(somar (number1, number2));

console.log(`A subtracao de ${number1} e 
${number2}`);
console.log(subtrair (number1, number2));

console.log(`A multiplicacao de ${number1} e 
${number2}`);
console.log(multiplicar (number1, number2));

console.log(`A divisao de ${number1} e 
${number2}`);
console.log(dividir (number1, number2));

//11. Utilizando instrução condicional, crie um programa que determine se uma pessoa é maior ou menor de idade

var idade = 17

if(idade >= 18){
    console.log('Maior de idade')
}
else{
  console.log('Menor de idade')
}


//12. Utilizando instrução condicional e operadores relacionais, crie um programa que identifique se um determinado número inteiro é par ou ímpar

var num = 7
if (num % 2 == 0){
  console.log ('Este número é par')
}
else {
  console.log ('Este número é ímpar')
}


//13. Utilizando instrução condicional e operadores lógicos, crie um programa que simule um sistema de login

var login = "carolina"
var senha = 123
if (login == 'carolina' && senha == 123){
console.log('Login OK')
}
else {
  console.log('Inválido')
}


//14. Utilizando funções e estrutura condicional, crie um programa que calcule o IMC de uma pessoa, imprimir o valor do IMC e sua classificação

var peso = 57
var altura = 1.69
var calculoimc = peso / (altura * altura)
if (calculoimc < 18){
  console.log('Abaixo do peso')
}
else if (calculoimc >= 18 && calculoimc < 25){
  console.log('Peso normal')
}
else {
  console.log('Acima do peso')
}


//15. Utilizando o loop de repetição for, crie um programa que imprima qualquer tabuada

var tabuada = 5;
for (var count = 1; count <= 10; count++){
  console.log(`${tabuada} X ${count} = ${tabuada*count}`);
}
//or console.log(tabuada + " X " + count " = " tabuada*count);


//16. Utilizando o loop de repetição for, instrução condicional, e operadores relacionais e lógicos crie um programa que conte a quantidade de vogais em uma String

var frase = "Meu nome é Carolina"
var contador = 0
for (var i = 0; i < frase.length; i++){
  if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u"){
 contador = contador + 1;
}
}
console.log(`A frase "${frase}" tem "${contador}" vogais.`)