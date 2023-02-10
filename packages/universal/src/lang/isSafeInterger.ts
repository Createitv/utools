import { isNumber } from '@/lang/isNumber'

/**
 * @description 判断是否是安全的数字类型
 * @point The safe integers consist of all integers from -(253 - 1) to 253 - 1, inclusive (±9,007,199,254,740,991). A safe integer is an integer that:
 * @param value
 * @returns {boolean}
 */
function isSafeInteger(value: any): boolean {
  return isNumber(value) && Number.isSafeInteger(value)
}

export { isSafeInteger }
