function setMovimentacoes() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const paginaLancamentos = planilha.getSheetByName("Lancamentos");
  const ultimaLinha = paginaLancamentos.getLastRow();

  const verificador = paginaLancamentos.getRange(`A3:A${ultimaLinha}`).getValues();

  for (i = 0; i < verificador.length; i++) {
    const linhaCelula = i + 2;
    const setEmpregado = buscarEmpregado(verificador[i]);

    planilha.getSheetByName("Conversao").getRange(`A${linhaCelula}:A${linhaCelula}`).setValue(1);
    planilha.getSheetByName("Conversao").getRange(`B${linhaCelula}:B${linhaCelula}`).setValue(setEmpregado);
  }
}