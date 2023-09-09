function limpar() {
    pagina("Lancamentos").getRange("B1:AA2").clear();
    pagina("Lancamentos").getRange("3:1000").clear();
    pagina("Conversao").getRange("1:1000").clear();
    pagina("LayoutPS").getRange("1:1000").clear();
}