function sumArray(numbersArray) {
  let total = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
  }
  return total;
}

// 2nd solution
// const reducer = (acc, curr) => acc + curr;
//   return numbersArray.reduce(reducer);

function fitWithinVal(specialValArray, value) {
  const results = [];
  for (let i = 0; i < specialValArray.length; i++) {
    if (specialValArray[i] < value) {
      results.push(specialValArray[i]);
      value = value - specialValArray[i];
    }
  }
  return results;
}

function getAllNamesShorterThan(namesArray, nameLength) {
  const results = [];
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i].length < nameLength) {
      results.push(namesArray[i]);
    }
  }
  return results;
}

function makeLabel(personObject) {}
