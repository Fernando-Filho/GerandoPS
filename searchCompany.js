function searchCompany() {

  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  
  const parametro = planilha.getSheetByName("Lancamentos").getRange("A1:A2").getValue();

  const tamanhoEsperado = planilha.getSheetByName("LayoutHeader").getRange("B6").getValue();

  let pagEmpresas = planilha.getSheetByName("Empresas");
  let listNameEmpresas = pagEmpresas.getRange("B:B").getValues();
  let listCodEmpresas = pagEmpresas.getRange("A:A").getValues();

  let resultado = searchCodCompany(parametro, listNameEmpresas, listCodEmpresas);

  if (resultado.length < tamanhoEsperado) {

    const zerosToAdd = tamanhoEsperado - resultado.length;
    const complementoCelula = "0".repeat(zerosToAdd);

    resultado = complementoCelula + resultado;
  }

  return resultado;

  function searchCodCompany(parametro, listNameEmpresas, listCodEmpresas){

    for (let i = 0; i < listNameEmpresas.length; i++) {

      if (parametro == listNameEmpresas[i]) {
        return listCodEmpresas[i];
      }
    }
    return 'A sua empresa não foi encontrada, por favor atualize sua lista de empresas!';
  }
}