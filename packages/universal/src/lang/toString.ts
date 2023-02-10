import { isArray } from '@/lang/isArray'
import { isNil } from '@/lang/isNil'
import { isString } from '@/lang/isString'
import { isSymbol } from '@/lang/isSymbol'

/**
 * @description 转化为 String 类型
 * @param value
 * @returns {string}
 */
function toString(value: any): string {
  if (isNil(value)) {
    return ''
  }
  if (isString(value)) {
    return value
  }
  if (isArray(value)) {
    return value.map((arrVal) => toString(arrVal)) + ''
  }
  if (isSymbol(value)) {
    return Symbol.prototype.toString.call(value)
  }
  const result = value + ''
  return result === '0' && 1 / value == -Infinity ? '-0' : result
}

export { toString }
