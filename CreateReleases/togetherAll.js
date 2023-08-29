function togetherAll(arrayStrings) {
    let result = '';
  
    for (let i = 0; i < arrayStrings.length; i++) {
      result = result + arrayStrings[i];
    }
    return result.replace(/,/g, "");
  }