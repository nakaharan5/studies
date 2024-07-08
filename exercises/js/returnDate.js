function retornaHora(data){
  if( data && !(data instanceof Date)){
    throw new TypeError("A função espera que o argumento seja uma instância de Date");
  }

  if(!data){
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  })
}

try{
  const dt = new Date('12-12-2012 12:58:12');
  const hora = retornaHora(dt);
  console.log(hora);
} catch{
  //
} finally{
  console.log("Data retornada")
}
