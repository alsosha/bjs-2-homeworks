function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i]
    }

    sum += arr[i]
  }

  let avg = Number((sum/arr.length).toFixed(2))
  
  return { min: min, max: max, avg: avg }
}

//console.log(getArrayParams());

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return arr.reduce((currentSum, currentNumber) => currentSum + currentNumber, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
  }
  
  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element
    } else {
      sumOddElement += element
    }
  }
  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement ++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let oneArr of arrOfArr) {
    if (func(...oneArr) > maxWorkerResult) {
      maxWorkerResult = func(...oneArr);
    }
  }
  return maxWorkerResult
}
