function conversaoCelulaComEspacos(celula, tamanhoEsperado) {

  const tamanhoCelula = celula.length;
  const complementoCelula = ' ';
  let resultado = celula;

  for (i = tamanhoCelula; i < tamanhoEsperado; i++) {
    resultado = resultado + complementoCelula;
  }
  return resultado
}