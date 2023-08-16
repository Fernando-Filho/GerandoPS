function convertProgramsName() {

    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    const programaDestinoNome = planilha.getSheetByName("LayoutHeader").getRange("C4").getValue;
    const programaDestinoTamanho = planilha.getSheetByName("LayoutHeader").getRange("B4").getValue;
    const originProgramNome = planilha.getSheetByName("LayoutHeader").getRange("C5").getValue;
    const originProgramTamanho = planilha.getSheetByName("LayoutHeader").getRange("B5").getValue;

    let programaDeDestino = planilha.getSheetByName("Conversao").getRange("C1");
    let programaDeOrigem = planilha.getSheetByName("Conversao").getRange("D1");

    programaDeDestino.setValue(convertLengthWithSpace(programaDestinoNome, programaDestinoTamanho));    
    programaDeOrigem.setValue(convertLengthWithSpace(originProgramNome, originProgramTamanho));    

    function convertLengthWithSpace(celula, tamanhoEsperado){

        const tamanhoCelula = celula.length;
        const complementoCelula = ' ';
        let resultado = '';
        
        for (i = tamanhoCelula; i < tamanhoEsperado; i++) {
            resultado =  celula + complementoCelula;
        }
        return resultado;
    }
}