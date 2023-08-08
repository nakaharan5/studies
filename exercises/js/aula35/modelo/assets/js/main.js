const elementos = [
    {tag: 'p', texto: 'Tarefa 1'},
    {tag: 'p', texto: 'Texto 2'},
    {tag: 'p', texto: 'Texto 3'},
    {tag: 'p', texto: 'Texto 4'},
]


const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag , texto} = elementos[i];
    let createdTag = document.createElement(tag);
    createdTag.innerHTML = texto;
    div.appendChild(createdTag);
}

container.appendChild(div);

