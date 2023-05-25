function chunk(arr: any[], size: number): any[][] {
  let l = arr.length / size;
  let ans: any[] = [];

  for (let i = 0; i < l; i++) {
    ans.push(arr.splice(0, size));
  }

  return ans;
}
