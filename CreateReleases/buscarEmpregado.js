function buscarEmpregado(celula) {
  const ultimaLinha = pagina("Empregados").getLastRow();
  const matrizEmpregado = pagina("Empregados").getRange(1,1,ultimaLinha,3).getValues();
  const empresaDeseja = buscarEmpresa();

  for (let i = 0; i <= matrizEmpregado.length; i++) {
    if (celula == matrizEmpregado[i][1] && empresaDeseja == matrizEmpregado[i][2]) {
      return  matrizEmpregado[i][0];
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}
