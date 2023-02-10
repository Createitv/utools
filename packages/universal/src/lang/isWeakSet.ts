import { _baseGetTag } from '@/lang/_getTag'

/**
 * @description 判断是否是 weakSet 类型
 * @param value
 * @returns {value is WeakSet<object>}
 */
function isWeakSet(value: any): value is WeakSet<object> {
  return _baseGetTag(value) === '[object WeakSet]'
}

export { isWeakSet }
