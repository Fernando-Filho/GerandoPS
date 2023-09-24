function addZerosAoLado(celula, tamanhoEsperado) {
  let tamanhoCelula = celula.length - 1;
  celula = Number(celula);
  celula = celula.toPrecision(tamanhoCelula);
  const zerosToAdd = tamanhoEsperado - celula.length;
  const zeros = "0".repeat(zerosToAdd);
  let resultado = zeros + celula;
  return resultado;
}