/*Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80 metros e seu IMC vale ?
Luiz Otávio Miranda nasceu em ? */

const nome = 'Luiz Otávio';
const sobrenome = ' Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;
let nomeCompleto = nome + sobrenome;

imc = peso/(altura*altura);
anoNascimento = 2023-idade;

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso}kg, tem ${altura} metros, e seu IMC vale ${imc}.`);
console.log(`${nomeCompleto} nasceu em ${anoNascimento}.`);