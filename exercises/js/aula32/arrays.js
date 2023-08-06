let groups = [
    //  0          1           2          3         4       // Linhas
    ['Thiago', 'Fernanda', 'Eduardo', 'Geovana', 'Paula'], //Coluna -> 0
    ['Marcos', 'Miki', 'Bernardo', 'João', 'Paulo'],       //Coluna -> 1
    ['Yago', 'Fernando', 'Junin', 'Yamato', 'Cassio']      //Coluna -> 2
];

//for (var coluna=0; coluna<3; coluna++){   //Esse for vai percorrer por indices de coluna
//    for(var linha=0; linha<5; linha++){ //Esse for vai percorrer as linhas das colunas
//        console.log(groups[coluna][linha]);
//    }
//};

//Matrizes em JavaScript

//Desestruturando

let subGroups = [groupOne, groupTwo, groupThree] = groups;

console.log(groupOne[1]);