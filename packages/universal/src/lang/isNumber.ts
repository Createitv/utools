import { _baseGetTag } from './_getTag'

/**
 * @description 判断是否是数字
 * @param value
 * @returns {value is number}
 */
function isNumber(value: any): value is number {
  return _baseGetTag(value) === '[object Number]'
}

export { isNumber }
