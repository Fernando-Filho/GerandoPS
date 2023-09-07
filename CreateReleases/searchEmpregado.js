function searchEmpregado(cell) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const employeePage = sheet.getSheetByName("Empregados");
  const listEmployeeName = employeePage.getRange("B:B").getValues();
  const listEmployeeCodes = employeePage.getRange("A:A").getValues();

  for (i = 0; i <= listEmployeeName.length; i++) {

    if (cell == listEmployeeName[i]) {
        return listEmployeeCodes[i]
    }
  }
  return 'O empregado não foi encontrado, por favor atualize sua lista de empregados!';
}