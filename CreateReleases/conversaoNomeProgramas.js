function conversaoNomeProgramas() {

    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    const paginaCabecalho = planilha.getSheetByName("LayoutHeader");

    const nomeSistemaOrigem = paginaCabecalho.getRange("C4").getValue();
    const tamanhoSistemaOrigem = paginaCabecalho.getRange("B4").getValue();
    const nomeSistemaDestino = paginaCabecalho.getRange("C5").getValue();
    const tamanhSistemaDestino = paginaCabecalho.getRange("B5").getValue();

    let sistemaOrigem = planilha.getSheetByName("Conversao").getRange("C1");
    let sistemaDestino = planilha.getSheetByName("Conversao").getRange("D1");

    sistemaOrigem.setValue(convertLengthWithSpace(nomeSistemaOrigem, tamanhoSistemaOrigem));
    sistemaDestino.setValue(convertLengthWithSpace(nomeSistemaDestino, tamanhSistemaDestino));
}