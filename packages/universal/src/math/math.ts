/**
 * @description 加法运算
 * @param {number} augend 加数
 * @param {number} addend 被加数
 * @returns {number}
 */
function add(augend: number, addend: number): number {
  return augend + addend
}

function ceil(n: number, precision = 0): number {
  const digit = Math.pow(10, precision)
  return Math.ceil(n * digit) / digit
}

export { ceil }

export { add }
