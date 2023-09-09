function buscarEmpresa() {
  
  const empresaDeseja = pagina("Lancamentos").getRange("A1:A2").getValue();
  const tamanhoEsperado = pagina("LayoutHeader").getRange("B6").getValue();
  const listaNomesEmpresas = pagina("Empresas").getRange("B:B").getValues();
  const listaCodigosEmpresas = pagina("Empresas").getRange("A:A").getValues();

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