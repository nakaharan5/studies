let stng = 'O rato roeu a roupa do rei de Roma';

console.log(stng.indexOf('o', 3)); // Achar o index da letra (começo->fim)

console.log(stng.lastIndexOf('o')); // (fim->começo)

console.log(stng.match(/[a-z]/g)); // Para achar os elementos de letras minúsculas no texto (Expressão Regular)

console.log(stng.search(/e/)); // Para procurar letra

console.log(stng.replace(/o/g, 'e')); // Substituir

console.log(stng.length); // Para saber o tamanho da string

console.log(stng.toUpperCase()); // Para deixar todas maiusculas

console.log(stng.toLowerCase()); // Para deixar todas minusculas
