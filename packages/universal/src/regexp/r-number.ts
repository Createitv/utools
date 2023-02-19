/**
 * @description   判断是否为数字
 * @param {string} value
 * @returns {boolean}
 */
function isPureNumber(value: string): boolean {
  return /^\d+$/.test(value)
}

/**
 * @description 判断是否为小数
 * @param {string} value
 * @returns {boolean}
 */
function isFloat(value: string): boolean {
  return /^\d+\.\d+$/.test(value)
}

/**
 * @description 判断是否为正整数
 * @param {string} value
 * @returns {boolean}
 */
function isPositiveInteger(value: string): boolean {
  return /^[1-9]\d*$/.test(value)
}

/**
 * @description 判断是否为负整数
 * @param {string} value
 * @returns {boolean}
 */
function isNegativeInteger(value: string): boolean {
  return /^-[1-9]\d*$/.test(value)
}

export { isPureNumber, isFloat, isNegativeInteger, isPositiveInteger }
