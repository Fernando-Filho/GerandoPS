function buscarEmpregado(celula) {

  const ultimaLinha = pagina("Empregados").getLastRow();
  const listaCodigosEmprgados = pagina("Empregados").getRange(1, 1, ultimaLinha, 1).getValues();
  const listaNomesEmprgados = pagina("Empregados").getRange(1, 2, ultimaLinha, 1).getValues();
  const matrizEmpregado = pagina("Empregados").getRange(1,1,ultimaLinha,3).getValues();

  for (i = 0; i <= matrizEmpregado.length; i++) {

    if (celula == listaNomesEmprgados[i][1] && buscarEmpresa() == listaNomesEmprgados[i][2]) {
        return listaCodigosEmprgados[i][0];
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}