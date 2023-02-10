import { _baseGetTag } from '@/lang/_getTag'

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {value is string}
 */
function isString(value: any): value is string {
  return _baseGetTag(value) === '[object String]'
}

export { isString }
