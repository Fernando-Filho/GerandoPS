function clear() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    limparLancamentos(sheet);
    limparConversao(sheet);
    limparLayoutPS(sheet);
}

function limparLancamentos(sheet) {
sheet.getSheetByName("Lancamentos").getRange("B1:AA2").clear();
sheet.getSheetByName("Lancamentos").getRange("3:1000").clear();
}

function limparConversao(sheet) {
sheet.getSheetByName("Conversao").getRange("1:1000").clear();
}

function limparLayoutPS(sheet) {
sheet.getSheetByName("LayoutPS").getRange("1:1000").clear();
}