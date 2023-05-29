function createPerson(name, surname, age){
    return{name, surname, age}
    };

const firstPerson = createPerson('Fernanda', 'Fernandes', '19');
const secondPerson = createPerson('Thiago','Frank','18');

console.log(`${firstPerson.name} ${firstPerson.surname} says: Hello!`);
console.log(`My age is ${firstPerson.age}`);
console.log(`My BF is ${secondPerson.name} ${secondPerson.surname}. He is ${secondPerson.age}`);
