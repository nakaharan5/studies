function inserir(){
    let texto = document.querySelector(".texto");
    const data = new Date();
    const dataAno = data.getFullYear();
    const dataMes = data.getMonth();
    const dataDia = data.getDate();
    texto.innerHTML = `${dataAno}/${dataMes}/${dataDia}`;
}
inserir();