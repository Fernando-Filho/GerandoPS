function buscarEmpresa() {
  
  const empresaDeseja = pagina("Lancamentos").getRange("A1:A2").getValue();
  const ultimaLinha = pagina("Empresas").getLastRow();
  const matrizEmpresa = pagina("Empresas").getRange(1, 1, ultimaLinha, 2).getValues();

  for (const empresaAnalisada of matrizEmpresa)  {
    if(empresaAnalisada[1] === empresaDeseja) {
      return empresaAnalisada[0]
    }
  }
  return Browser.msgBox("Infelizmente não encontramos sua empresa, por favor verifique os lançamentos novamente!!!");
}