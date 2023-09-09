function buscarEmpregado(celula) {

  const listaNomesEmprgados = pagina("Empregados").getRange("B:B").getValues();
  const listaCodigosEmprgados = pagina("Empregados").getRange("A:A").getValues();

  for (i = 0; i <= listaNomesEmprgados.length; i++) {

    if (celula == listaNomesEmprgados[i]) {
        return listaCodigosEmprgados[i]
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}