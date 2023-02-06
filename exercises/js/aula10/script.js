let nota1;
let nota2;
let nota3;
let media;

nota1 = prompt('Digite sua nota: ');
nota2 = prompt('Digite sua segunda nota: ');
nota3 = prompt('Digite sua terceira nota: ');

media = ((nota1*4)+(nota2*5)+(nota3*6))/15;

media = parseFloat(media);

window.alert(`Sua média final é ${media}`);
