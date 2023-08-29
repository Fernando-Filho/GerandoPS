function convertLengthWithSpace(cell, expectedSize) {

    const cellSize = cell.length;
    const complementCell = ' ';
    let result = cell;
  
    for (i = cellSize; i < expectedSize; i++) {
      result = result + complementCell;
    }
    return result
  }