function convertValue(parametro, tipoParametro) {

  let resultado = '';
  
  if (parametro == Math.floor(parametro)){
    parametro = parametro + ".00"
  }
  
  parametro = String(parametro);
  
  let separar = splitParametro(parametro);
  let tratamentoParametro = parametro.split(separar);
  
  if (tratamentoParametro[1].length < 2){
    tratamentoParametro[1] = tratamentoParametro[1] + "0"
  }
  
  if (tipoParametro == "Qtd. Horas") {
    tratamentoParametro = tratamentoParametro.map(Number);
    let tratamentoMinutos = tratamentoParametro[1] / 60;
    parametro = tratamentoParametro[0] + tratamentoMinutos;
    
    parametro = parametro.toFixed(2);
    console.log(parametro)
  }
  else{
    parametro = `${tratamentoParametro[0]}.${tratamentoParametro[1]}`
    console.log(parametro)
  }

  resultado = addZerosToSide(parametro, 10);

  return resultado;

}
  
  function addZerosToSide(parametro, tamanhoEsperado) {

    let tamanhoParametro = parametro.length -1;
    parametro = Number(parametro);
    parametro = parametro.toPrecision(tamanhoParametro);

    const zerosToAdd = tamanhoEsperado - parametro.length;
    const zeros = "0".repeat(zerosToAdd);
  
    let resultado = zeros + parametro;
    return resultado;
  
    }
  
  function splitParametro(parametro) {
    
    let parametroSeparado = parametro.split("");
    
    for(let i = 0; i <= parametroSeparado.length; i++) {
      
      if (parametroSeparado[i] === "." || parametroSeparado[i] === "," || parametroSeparado[i] === ";" || parametroSeparado[i] === ":") {
        return parametroSeparado[i];
      
      }
    }
  }