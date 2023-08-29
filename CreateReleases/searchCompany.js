function searchCompany() {

  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  const cell = sheet.getSheetByName("Lancamentos").getRange("A1:A2").getValue();

  const expectedSize = sheet.getSheetByName("LayoutHeader").getRange("B6").getValue();

  let companyPage = sheet.getSheetByName("Empresas");
  let listCompanyName = companyPage.getRange("B:B").getValues();
  let listCompanyCodes = companyPage.getRange("A:A").getValues();

  let result = searchCodCompany(cell, listCompanyName, listCompanyCodes);

  if (result.length < expectedSize) {

    const zerosToAdd = expectedSize - result.length;
    const complementCell = "0".repeat(zerosToAdd);

    result = complementCell + result;
  }

  return result;

  function searchCodCompany(cell, listCompanyName, listCompanyCodes){

    for (let i = 0; i < listCompanyName.length; i++) {

      if (cell == listCompanyName[i]) {
        return listCompanyCodes[i];
      }
    }
    return 'A sua empresa não foi encontrada, por favor atualize sua lista de empresas!';
  }
}