function writeHeader() {
    const cabecalhoConstante = pagina("LayoutHeader").getRange("C2").getValue();
    const versaoLayout = pagina("LayoutHeader").getRange("C3").getValue();
  
    pagina("Conversao").getRange(1,1).setValue(cabecalhoConstante);
    pagina("Conversao").getRange(1,2).setValue(versaoLayout);
    convertProgramsName();
    pagina("Conversao").getRange(1,5).setValue(buscarEmpresa());
    const comentario = Browser.inputBox("Deseja fazer algum comentário?","Caso não, basta clicar em CANCELAR",Browser.Buttons.OK_CANCEL);
    if(comentario != "cancel") {
      pagina("Conversao").getRange(1,6).setValue(comentario);
    }
  }