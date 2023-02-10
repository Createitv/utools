import { _baseGetTag } from './_getTag'

/**
 * @description 判断是不是正则类型
 * @param value
 * @returns {value is RegExp}
 */
function isRegExp(value: any): value is RegExp {
  return _baseGetTag(value) === '[object RegExp]'
}

export { isRegExp }
