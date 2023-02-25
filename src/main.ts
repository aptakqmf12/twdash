const sum = (a: number, b: number) => a + b;

function group(arr: Array<any>, callback: (v: any) => any) {
  return arr.reduce((acc, cur) => {
    const key = callback(cur);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});
}
export { sum, group };
