import { isFunction } from './isFunction'
import { isLength } from './isLength'

/**
 * @description 判断是否是 ArrayLike 类型
 * @param value
 * @returns {value is {length: number}}
 */
function isArrayLike(value: any): value is { length: number } {
  return value !== null && !isFunction(value) && isLength(value.length)
}

export { isArrayLike }
