function searchEmpregado(parametro) {

    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let pagEmpregados = planilha.getSheetByName("Empregados");
    let listNameEmpregados = pagEmpregados.getRange("B:B").getValues();
    let listCodEmpregados = pagEmpregados.getRange("A:A").getValues();

    let resultado = ''
    for (i = 0; i <= listNameEmpregados.length; i++) {
        if (parametro == listNameEmpregados[i]) {
        resultado = listCodEmpregados[i]
        return resultado;
        }

    }
    return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}