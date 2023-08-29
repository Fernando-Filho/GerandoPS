function criarArquivoPS() {
  var conteudo = "Este é o conteúdo do arquivo de texto.";
  var nomeArquivo = "meuarquivo.txt";

  var blob = Utilities.newBlob(conteudo, "text/plain", nomeArquivo);

  DriveApp.createFile(blob);
}