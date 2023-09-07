function buscarEmpresa() {

  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  
  const celula = planilha.getSheetByName("Lancamentos").getRange("A1:A2").getValue();

  const tamanhoEsperado = planilha.getSheetByName("LayoutHeader").getRange("B6").getValue();

  let paginaEmpresas = planilha.getSheetByName("Empresas");
  let listaNomesEmpresas = paginaEmpresas.getRange("B:B").getValues();
  let listaCodigosEmpresas = paginaEmpresas.getRange("A:A").getValues();

  let resultado = buscarCodigoEmpresa(celula, listaNomesEmpresas, listaCodigosEmpresas);

  if (resultado.length < tamanhoEsperado) {

    const adcionarZeros = tamanhoEsperado - resultado.length;
    const complementoCelula = "0".repeat(adcionarZeros);

    resultado = complementoCelula + resultado;
  }

  return resultado;

  function buscarCodigoEmpresa(celula, listaNomesEmpresas, listaCodigosEmpresas){

    for (let i = 0; i < listCompanyName.length; i++) {

      if (celula == listaNomesEmpresas[i]) {
        return listaCodigosEmpresas[i];
      }
    }
    return 'A sua empresa não foi encontrada, por favor atualize sua lista de empresas!';
  }
}