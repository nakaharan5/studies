const a = [1, 2, 3];
const b = [...a];
const c = b;

console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('Thiago');
console.log(c);
