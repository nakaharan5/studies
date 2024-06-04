const fibonacci = (n) =>{
    if (n <= 0){
        return 0;
    } 
    
    if(n === 1){
        return 1;
    }

    if (n>1){
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

const n = 6;
console.log(`A posicao ${n} da sequencia de fibonacci eh ${fibonacci(n)} `);