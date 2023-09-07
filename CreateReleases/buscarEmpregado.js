function buscarEmpregado(celula) {

  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const paginaEmpregado = planilha.getSheetByName("Empregados");
  const listaNomesEmprgados = paginaEmpregado.getRange("B:B").getValues();
  const listaCodigosEmprgados = paginaEmpregado.getRange("A:A").getValues();

  for (i = 0; i <= listEmployeeName.length; i++) {

    if (celula == listaNomesEmprgados[i]) {
        return listaCodigosEmprgados[i]
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}