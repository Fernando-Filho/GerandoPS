function addZerosToSide(cell, expectedSize) {

    let cellSize = cell.length - 1;
    cell = Number(cell);
    cell = cell.toPrecision(cellSize);
  
    const zerosToAdd = expectedSize - cell.length;
    const zeros = "0".repeat(zerosToAdd);
  
    let result = zeros + cell;
    return result;
  }