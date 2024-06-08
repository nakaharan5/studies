let lista = Array.from({length: 30}, ()=> Math.floor(Math.random()*100) + 2);
// Meu array está sendo baseado no método estático Array.from que permite que você determine o tamanho do seu array passando instâncias e também permite o uso da biblioteca Math para gerar números aleatórios.


let maiorNumero = Math.max(...lista);

console.clear();
console.log(lista);
console.log(maiorNumero);