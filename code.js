 
  function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDictionaryData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  return data;
}


