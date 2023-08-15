function convertValue(parametro, tipoParametro) {

    let resultado = '';
  
    if (tipoParametro == "Qtd. Horas") {
      
      let split = splitParametro(parametro);
      let tratamentoParametro = parametro.split(split);
      tratamentoParametro = tratamentoParametro.map(Number);
      let tratamentoMinutos = tratamentoParametro[1];
      tratamentoMinutos = tratamentoMinutos / 60;
  
      parametro = tratamentoParametro[0] + tratamentoMinutos;
      parametro = parametro.toFixed(2);
      console.log(`eu ${parametro}`)
    }
    
    resultado = addZerosToSide(parametro, 10);
  
    return resultado;
  
  }
  
  function addZerosToSide(parametro, tamanhoEsperado) {

    let tamanhoParametro = parametro.length;
    parametro = Number(parametro);
    parametro = parametro.toPrecision(tamanhoParametro);
    console.log(`eu ${parametro}`)

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
  
  console.log(convertValue("20:3","Qtd. Horas"))