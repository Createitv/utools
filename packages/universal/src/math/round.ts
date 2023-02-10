/**
 * @description 向最近取整并保留几位
 * @param {number} n
 * @param {number} precision
 * @returns {number}
 */
function round(n: number, precision = 0): number {
  const digit = Math.pow(10, precision)
  return Math.round(n * digit) / digit
}

console.log(round(10.213123, 10))
export { round }
