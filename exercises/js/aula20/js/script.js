function meuEscopo(){
    const formulario = document.querySelector('.formulario');
    const tabela = document.querySelector('.tabela'); 

    const pessoas = []; //Lista de Pessoas no site

    function detectarEvento(evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const idade = formulario.querySelector('.idade');
        const peso = formulario.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            peso: peso.value
        });

        tabela.innerHTML += ``;

    }

    formulario.addEventListener('submit', detectarEvento);
}

meuEscopo();