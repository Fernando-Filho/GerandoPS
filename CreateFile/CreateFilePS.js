function nameFile() {

  let nomeArquivo = Browser.inputBox("Nome do arquivo", "Digite o nome do arquivo a ser criado:", Browser.Buttons.OK_CANCEL);
  if (nomeArquivo == "cancel") {
    return; // Cancela a operação se o usuário clicar em Cancelar
  }
  createFilePS(nomeArquivo);
}

function createFilePS(nomeArquivo){

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const page = sheet.getSheetByName("LayoutPS");
  const lastRow = page.getLastRow();
  const lastColumn = page.getLastColumn();
  const dataBase = page.getRange(1,1,lastRow,lastColumn).getValues();


  const conteudo = dataBase.join("\n");
  nomeArquivo = nomeArquivo + ".ps";

  const blob = Utilities.newBlob(conteudo, "text/plain", nomeArquivo);

  DriveApp.createFile(blob);
}