import { toFinite } from '@/lang/toFinite'

/**
 * @description 转化为整数
 * @param value
 * @returns {number}
 */
function toInteger(value: any): number {
  const result = toFinite(value)
  return result - (result % 1)
}

export { toInteger }
