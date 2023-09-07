function converterValor(celula, parametroTipo) {

  let resultado = '';
  
  if (celula == Math.floor(celula)){
    celula = celula + ".00"
  }
  
  celula = String(celula);
  
  let separar = separarCelula(celula);
  let tratamentoCelula = celula.split(separar);
  
  if (tratamentoCelula[1].length < 2){
    tratamentoCelula[1] = tratamentoCelula[1] + "0"
  }
  
  if (parametroTipo == "Qtd. Horas") {
    tratamentoCelula = tratamentoCelula.map(Number);
    let tratamentoMinutos = tratamentoCelula[1] / 60;
    celula = tratamentoCelula[0] + tratamentoMinutos;
    
    celula = celula.toFixed(2);
  }
  else{
    celula = `${tratamentoCelula[0]}.${tratamentoCelula[1]}`
  }

  resultado = addZerosAoLado(celula, 10);

  return resultado;

}
  
  function separarCelula(celula) {
    
    let separacaoCelula = celula.split("");
    
    for(let i = 0; i <= separacaoCelula.length; i++) {
      
      if (separacaoCelula[i] === "." || separacaoCelula[i] === "," || separacaoCelula[i] === ";" || separacaoCelula[i] === ":") {
        return separacaoCelula[i];
      
      }
    }
  }
