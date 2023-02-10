import { isNumber } from './isNumber'

/**
 * @description 判断是否是整数
 * @param value
 * @returns {boolean}
 */
function isInteger(value: any): boolean {
  return isNumber(value) && Number.isInteger(value)
}

export { isInteger }
