function searchEmpregado(parametro) {

    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let pagEmpregados = planilha.getSheetByName("Empregados");
    let listNameEmpregados = pagEmpregados.getRange("B:B").getValues();
    let listCodEmpregados = pagEmpregados.getRange("A:A").getValues();
  
    for (i = 0; i <= listNameEmpregados.length; i++) {
      if (parametro == listNameEmpregados[i]) {
        return listCodEmpregados[i]
      }
    }
    return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}