function checkValid(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    let m = [...new Set(matrix[i])];

    let rowCounter = 0;
    let rowPrev = -1;

    for (let j = 0; j < m.length; j++) {
      let n = m[j];
      if (n != rowPrev) {
        rowCounter += n;
        rowPrev = n;
      }
    }

    let colCounter = 0;
    let colPrev = -1;
    for (let k = 0; k < matrix.length; k++) {
      let n = [...new Set(matrix[k])][i];
      if (n != colPrev) {
        colCounter += n;
        colPrev = n;
      }
    }

    if (colCounter !== rowCounter) return false;
  }

  return true;
}
