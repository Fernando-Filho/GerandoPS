
function setMovimentacoes() {
  
  const ultimaLinha = pagina("Lancamentos").getLastRow();
  const ultimaColuna = pagina("Lancamentos").getLastColumn();
  
  const lancamentosDados = pagina("Lancamentos").getRange(3, 1, (ultimaLinha - 2), ultimaColuna).getValues();
  let eventosDados = pagina("Lancamentos").getRange(1, 2, 2, (ultimaColuna - 1)).getValues();
  
  eventosDados = conversaoMatriz(eventosDados);
  
  let linha = 2;
  
  for (i = 0; i < lancamentosDados.length; i++) {
    
    let evento = 0
    
    for (c = 1; c < lancamentosDados[i].length; c++) {
      
      if ( lancamentosDados[i][c] != 0) {
        
        pagina("Conversao").getRange(linha, 2).setValue(buscarEmpregado(lancamentosDados[i][0]));
        pagina("Conversao").getRange(linha, 3).setValue(eventosDados[evento][0]);
        pagina("Conversao").getRange(linha, 4).setValue(converterValor(lancamentosDados[i][c],eventosDados[evento][1]));
        pagina("Conversao").getRange(linha, 5).setValue(converterValor(0,"Valor"));
        
        linha++
      }
      evento++
    }
  }
  const ultimoLancamento = pagina("Conversao").getLastRow();
  pagina("Conversao").getRange(2, 1, (ultimoLancamento - 1)).setValue('1');
}


function conversaoMatriz(matriz) {
  let arrayTransferencia = [];

  for (i = 0; i < matriz[0].length; i++) {
    arrayTransferencia.push([matriz[0][i]]);
  }
  
  for (i = 0 ; i < arrayTransferencia.length; i++) {
    arrayTransferencia[i].push(matriz[1][i]);
  }
  return arrayTransferencia;
}