import { _baseGetTag } from '@/lang/_getTag'

/**
 * @description 判断是否是 WeakMap 类型
 * @param value
 * @returns {value is WeakMap<object, any>}
 */
function isWeakMap(value: any): value is WeakMap<object, any> {
  return _baseGetTag(value) === '[object WeakMap]'
}

export { isWeakMap }
