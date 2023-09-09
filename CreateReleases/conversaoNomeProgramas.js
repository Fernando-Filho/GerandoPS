function conversaoNomeProgramas() {

    const nomeSistemaOrigem = pagina("LayoutHeader").getRange("C4").getValue();
    const tamanhoSistemaOrigem = pagina("LayoutHeader").getRange("B4").getValue();
    const nomeSistemaDestino = pagina("LayoutHeader").getRange("C5").getValue();
    const tamanhSistemaDestino = pagina("LayoutHeader").getRange("B5").getValue();

    pagina("Conversao").getRange("C1").setValue(convertLengthWithSpace(nomeSistemaOrigem, tamanhoSistemaOrigem));
    pagina("Conversao").getRange("D1").setValue(convertLengthWithSpace(nomeSistemaDestino, tamanhSistemaDestino));
}