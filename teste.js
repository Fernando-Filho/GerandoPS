function criarArquivoTxt() {
  var conteudo = "Este é o conteúdo do arquivo de texto.";
  var nomeArquivo = "meuarquivo.txt";

  var blob = Utilities.newBlob(conteudo, "text/plain", nomeArquivo);

  DriveApp.createFile(blob);
}

function doGet(e) {
  var conteudo = "Este é o conteúdo do arquivo de texto.";
  var nomeArquivo = "meuarquivo.txt";

  var blob = Utilities.newBlob(conteudo, "text/plain", nomeArquivo);

  return ContentService.createTextOutput()
    .setContentDisposition(ContentService.Attachment)
    .setMimeType("text/plain")
    .downloadAsFile(nomeArquivo)
    .setContent(blob.getBytes());
}
//teste