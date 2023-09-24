function juntarDados() {
  const ultimaLinha = pagina("Conversao").getLastRow();
  const ultimaColuna = pagina("Conversao").getLastColumn();
  const baseDados = pagina("Conversao").getRange(1,1,ultimaLinha,ultimaColuna).getValues();

  for (let i = 0; i < baseDados.length; i++) {
    let resultado = '';
    for ( let c = 0; c <baseDados[i].length; c++) {
      resultado = resultado + baseDados[i][c];
    }
    resultado = resultado.replace(/,/g, "");
    pagina("LayoutPS").getRange((i + 1), 1).setValue(resultado);
  }
}