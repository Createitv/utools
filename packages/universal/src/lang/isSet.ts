import { _baseGetTag } from '@/lang/_getTag'

/**
 * @description 是否是 Set 类型
 * @param value
 * @returns {value is Set<any>}
 */
function isSet(value: any): value is Set<any> {
  return _baseGetTag(value) === '[object Set]'
}

export { isSet }
