function searchEventCodes(celula) {

    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    const paginaEventos = planilha.getSheetByName("Eventos");
    const listEventName = paginaEventos.getRange("B:B").getValues();
    const listEventCodes = paginaEventos.getRange("A:A").getValues();
    const expectedSize = planilha.getSheetByName("LayoutSheet").getRange("B4").getValue();

    for (i = 0; i <= listEventName.length; i++) {

        if (celula == listEventName[i]) {

        let result = String(listEventCodes[i]);

        if (result.length < expectedSize) {

            const zerosToAdd = expectedSize - result.length;
            const complementCell = "0".repeat(zerosToAdd);

            result = complementCell + result;
        }
        return result;
        }
    }
    return 'Não consegui buscar o que procura, por favor atualize sua planilha!';
}