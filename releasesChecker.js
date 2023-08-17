function releasesChecker() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const releases = sheet.getSheetByName("Lancamentos");
    const lastRow = releases.getLastRow();
  
    const verificador = releases.getRange(`A3:A${lastRow}`).getValues();
  
    for ( let i = 0; i < verificador.length; i++) {
      const lineCell = i + 2;
      const setEmployeeCodes = searchEmpregado(verificador[i]);
  
      console.log(setEmployeeCodes);
  
      sheet.getSheetByName("Conversao").getRange(`A${lineCell}:A${lineCell}`).setValue(1);
      sheet.getSheetByName("Conversao").getRange(`B${lineCell}:B${lineCell}`).setValue(setEmployeeCodes);
    }
  }