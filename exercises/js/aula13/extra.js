const name1 = prompt("Write your mother's name: ");

const name2 = prompt("Write your father's name: ");

const name3 = prompt('Write your name: ');

let numbOfChar1 = parseInt(name1.length);
let numbOfChar2 = parseInt(name2.length);
let numbOfChar3 = parseInt(name3.length);

let aux = numbOfChar1+numbOfChar2+numbOfChar3; // Number of all names

document.body.innerHTML += `${name1.toUpperCase()} is your mother <br />`;
document.body.innerHTML += `${name2.toUpperCase()} is your father <br />`;
document.body.innerHTML += `${name3.toUpperCase()} is yourself <br />`;
document.body.innerHTML += `All names together have ${aux} characthers.<br />`;



