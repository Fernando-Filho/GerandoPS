function buscarEmpregado(celula) {

  const ultimaLinha = pagina("Empregados").getLastRow();
  const listaCodigosEmprgados = pagina("Empregados").getRange(1, 1, ultimaLinha, 1).getValues();
  const listaNomesEmprgados = pagina("Empregados").getRange(1, 2, ultimaLinha, 1).getValues();

  for (i = 0; i <= listaNomesEmprgados.length; i++) {

    if (celula == listaNomesEmprgados[i]) {
        return listaCodigosEmprgados[i]
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}