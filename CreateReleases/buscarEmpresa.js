function buscarEmpresa() {
  
  const empresaDeseja = pagina("Lancamentos").getRange("A1:A2").getValue();
  const tamanhoEsperado = pagina("LayoutHeader").getRange("B6").getValue();
  const ultimaLinha = pagina("Empresas").getLastRow();
  const listaCodigosEmpresas = pagina("Empresas").getRange(1, 1, ultimaLinha, 1).getValues();
  const listaNomesEmpresas = pagina("Empresas").getRange(1, 2, ultimaLinha, 1).getValues();

  let resultado = buscarCodigoEmpresa(empresaDeseja, listaNomesEmpresas, listaCodigosEmpresas);

  if (resultado.length < tamanhoEsperado) {

    const adcionarZeros = tamanhoEsperado - resultado.length;
    const complementoCelula = "0".repeat(adcionarZeros);

    resultado = complementoCelula + resultado;
  }

  return resultado;

  function buscarCodigoEmpresa(empresaDeseja, listaNomesEmpresas, listaCodigosEmpresas){

    for (let i = 0; i < listCompanyName.length; i++) {

      if (empresaDeseja == listaNomesEmpresas[i]) {
        return listaCodigosEmpresas[i];
      }
    }
    return 'A sua empresa não foi encontrada, por favor atualize sua lista de empresas!';
  }
}