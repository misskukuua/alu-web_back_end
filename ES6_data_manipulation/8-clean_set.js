function cleanSet(set, startString) {
  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  }
  // Remove the trailing '-'
  result = result.slice(0, -1);
  return result;
}

export default cleanSet;
