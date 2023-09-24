function cadastrarEmpregado() {
    let ultimaLinhaEmpregado = pagina("Empregados").getLastRow();
    const matrizEmpregado = pagina("Empregados").getRange(1,1,ultimaLinhaEmpregado,3).getValues();
  
    const ultimaLinhaEmpregadoACadastrar = pagina("Add Empresa/Empregado").getLastRow();
    const matrizACadastrar = pagina("Add Empresa/Empregado").getRange(1,1,ultimaLinhaEmpregadoACadastrar,3).getValues();
  
    let ultimaLinhaEmpresas = pagina("Empresas").getLastRow();
    const matrizEmpresa = pagina("Empresas").getRange(1,1,ultimaLinhaEmpresas,2).getValues();
  
  
  
    firstLoop: for(const empregadoACadastrar of matrizACadastrar)  {
      for(let i = 0; i <= matrizEmpregado.length; i++){
        if(JSON.stringify(empregadoACadastrar) == JSON.stringify(matrizEmpregado[i])){
          continue firstLoop;
        }
        if(i < matrizEmpregado.length){
          const empregadoVerificado = matrizEmpregado[i];
          if(JSON.stringify(empregadoACadastrar[2]) == JSON.stringify(empregadoVerificado[2])){
            if(empregadoACadastrar[0] === empregadoVerificado[0]){
              return Browser.msgBox(`Empregado ( ${empregadoACadastrar[1]} ) não pode ser cadastrado, pois tem outra pessoa com o mesmo código na empresa ${empregadoACadastrar[2]})`)
            }
          }
        }
        if(i === matrizEmpregado.length) {
          for(let c = 0; c <= matrizEmpresa.length; c++) {
            if(c === matrizEmpresa.length)  {
              
              let newEmpresa = Browser.inputBox(`Não encontramos a empresa com o código ${empregadoACadastrar[2]}`, "Caso deseje cadastrar como uma nova empresa, digite seu nome:", Browser.Buttons.OK_CANCEL);
              if(newEmpresa == "cancel") {
                return;
              }else{
                const tamanaoEmpresaEsperado = pagina("LayoutHeader").getRange("B6").getValue();
                if(empregadoACadastrar[2] != tamanaoEmpresaEsperado)  {
                  empregadoACadastrar[2] = Browser.inputBox(`Lembre que o código da empresa precisa ter ${tamanaoEmpresaEsperado} digitos!`, "Por favor digite de acordo", Browser.Buttons.OK_CANCEL);
                  if(newEmpresa == "cancel") {
                    return;
                }
                pagina("Empresas").getRange((ultimaLinhaEmpresas + 1),1).setValue(empregadoACadastrar[2]);
                pagina("Empresas").getRange((ultimaLinhaEmpresas + 1),2).setValue(newEmpresa);
              }
              realizarCadastroEmpregado(empregadoACadastrar, ultimaLinhaEmpregado);
              ultimaLinhaEmpregado ++
              continue firstLoop;
            }
          }
          if(empregadoACadastrar[2] === matrizEmpresa[c][0])  {
            realizarCadastroEmpregado(empregadoACadastrar, ultimaLinhaEmpregado);
            ultimaLinhaEmpregado ++
            continue firstLoop;
          }
        }
      }
    }
  }
}
  function realizarCadastroEmpregado(empregadoACadastrar, ultimaLinhaEmpregado) {
    pagina("Empregados").getRange((ultimaLinhaEmpregado + 1),1).setValue(empregadoACadastrar[0]);
    pagina("Empregados").getRange((ultimaLinhaEmpregado + 1),2).setValue(empregadoACadastrar[1]);
    pagina("Empregados").getRange((ultimaLinhaEmpregado + 1),3).setValue(empregadoACadastrar[2]);
  }