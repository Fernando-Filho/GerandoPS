function juntarDados(arrayStrings) {
  let resultado = '';

  for (let i = 0; i < arrayStrings.length; i++) {
    resultado = resultado + arrayStrings[i];
  }
  return resultado.replace(/,/g, "");
}