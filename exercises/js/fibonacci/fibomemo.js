function calcular(){

    function fibonacci(valor, memo = {}){
        if (valor === 0){
            return 0;
        }

        if (valor === 1){
            return 1;
        }

        if(valor in memo){
            return memo[valor];
        }

        if(valor > 1){
            memo[valor] = fibonacci(valor-1, memo) + fibonacci(valor-2, memo);

            return memo[valor];
        }
    }


    const valor = parseInt(document.querySelector('#valor').value);
    const resposta = document.querySelector('#resposta');

    return resposta.innerHTML = `<p>Esse é o valor de fibonacci ${fibonacci(valor)}</p>`;
}
