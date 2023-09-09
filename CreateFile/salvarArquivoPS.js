function salvarArquivoPS(){

  let nomeArquivo = Browser.inputBox("Nome do arquivo", "Digite o nome do arquivo a ser criado:", Browser.Buttons.OK_CANCEL);

  if (nomeArquivo == "cancel") {
    return; // Cancela a operação se o usuário clicar em Cancelar
  }

  const pagina = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LayoutPS");
  const ultimaLinha = pagina.getLastRow();
  const ultimaColuna = pagina.getLastColumn();
  const dadosArquivo = pagina.getRange(1,1,ultimaLinha,ultimaColuna).getValues();


  const conteudo = dadosArquivo.join("\n");
  nomeArquivo = nomeArquivo + ".ps";

  const blob = Utilities.newBlob(conteudo, "text/plain", nomeArquivo);

  DriveApp.createFile(blob);
}