function convertProgramsName() {

    const sheet = SpreadsheetApp.getActiveSpreadsheet();
    const layoutHeader = sheet.getSheetByName("LayoutHeader");
  
    const targetProgramName = layoutHeader.getRange("C4").getValue();
    const targetProgramNameLength = layoutHeader.getRange("B4").getValue();
    const sourceProgramName = layoutHeader.getRange("C5").getValue();
    const sourceProgramNameLength = layoutHeader.getRange("B5").getValue();
  
    let targetProgram = sheet.getSheetByName("Conversao").getRange("C1");
    let sourceProgram = sheet.getSheetByName("Conversao").getRange("D1");

    targetProgram.setValue(convertLengthWithSpace(targetProgramName, targetProgramNameLength));
    sourceProgram.setValue(convertLengthWithSpace(sourceProgramName, sourceProgramNameLength));
}