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

function divide(dividend: number, divisor: number): number {
  return dividend / divisor
}

function floor(n: number, precision = 0): number {
  const digit = Math.pow(10, precision)
  return Math.floor(n * digit) / digit
}

function multiply(multiplier: number, multiplicand: number): number {
  return multiplier * multiplicand
}

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

/**
 * @description 减法运算
 * @param {number} minuend 减数
 * @param {number} subtrahend 被减数
 * @returns {number}
 */
function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend
}

export { subtract, round, multiply, floor, divide, ceil, add }
