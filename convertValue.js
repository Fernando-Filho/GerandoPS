function convertValue(cell, typeCell) {

  let result = '';
  
  if (cell == Math.floor(cell)){
    cell = cell + ".00"
  }
  
  cell = String(cell);
  
  let toSplit = splitcell(cell);
  let cellTreatment = cell.split(toSplit);
  
  if (cellTreatment[1].length < 2){
    cellTreatment[1] = cellTreatment[1] + "0"
  }
  
  if (typeCell == "Qtd. Horas") {
    cellTreatment = cellTreatment.map(Number);
    let minutesTreatment = cellTreatment[1] / 60;
    cell = cellTreatment[0] + minutesTreatment;
    
    cell = cell.toFixed(2);
    console.log(cell)
  }
  else{
    cell = `${cellTreatment[0]}.${cellTreatment[1]}`
    console.log(cell)
  }

  result = addZerosToSide(cell, 10);

  return result;

}
  
  function addZerosToSide(cell, tamanhoEsperado) {

    let tamanhocell = cell.length -1;
    cell = Number(cell);
    cell = cell.toPrecision(tamanhocell);

    const zerosToAdd = tamanhoEsperado - cell.length;
    const zeros = "0".repeat(zerosToAdd);
  
    let result = zeros + cell;
    return result;
  
    }
  
  function splitcell(cell) {
    
    let separateCell = cell.split("");
    
    for(let i = 0; i <= separateCell.length; i++) {
      
      if (separateCell[i] === "." || separateCell[i] === "," || separateCell[i] === ";" || separateCell[i] === ":") {
        return separateCell[i];
      
      }
    }
  }

  console.log(convertValue(".1","Qtd. Horas"))