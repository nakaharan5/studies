function soma(x,y){
  if(typeof(x) !== Number || typeof(y) !== Number){
    throw new Error("Um erro foi encontrado");
  }

  return x + y;
}

try{
  console.log(soma());
} catch(e){
  console.log(e);
}
