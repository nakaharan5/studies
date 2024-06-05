const memo = {};

const fatorial = (n) => {
    
    if(n in memo){
        return memo[n];
    }

    if (n === 0 || n === 1 ){
        return 1;
    } 

    if (n>1){
        resultado =  n * fatorial(n-1);

        memo[n] = resultado;

        return resultado;
    }
}