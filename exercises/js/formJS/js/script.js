function escopo(){
    const formulario = document.querySelector('.formulario');
    const resultado = document. querySelector('.resultado');

    const pessoas = [];

    function formRecebeEvento(evento){
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}<br>Peso: ${peso.value}kg<br>Altura: ${altura.value}cm</p>`;
    }

    formulario.addEventListener('submit', formRecebeEvento);
    
}


escopo();