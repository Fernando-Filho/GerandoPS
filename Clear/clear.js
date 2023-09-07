function limpar() {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    limparLancamentos(planilha);
    limparConversao(planilha);
    limparLayoutPS(planilha);
}

function limparLancamentos(planilha) {
planilha.getSheetByName("Lancamentos").getRange("B1:AA2").clear();
planilha.getSheetByName("Lancamentos").getRange("3:1000").clear();
}

function limparConversao(planilha) {
planilha.getSheetByName("Conversao").getRange("1:1000").clear();
}

function limparLayoutPS(planilha) {
planilha.getSheetByName("LayoutPS").getRange("1:1000").clear();
}