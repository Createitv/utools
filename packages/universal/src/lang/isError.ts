import { _baseGetTag } from '@/lang/_getTag'

/**
 * @description 判断是否是 Error 类型
 * @param value
 * @returns {value is Error}
 */
function isError(value: any): value is Error {
  return _baseGetTag(value) === '[object Error]'
}

export { isError }
