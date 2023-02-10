import { _baseGetTag } from './_getTag'

/**
 * @description 判断是 ArrayBuffer 类型
 * @param value
 * @returns {value is ArrayBuffer}
 */
function isArrayBuffer(value: any): value is ArrayBuffer {
  return _baseGetTag(value) === '[object ArrayBuffer]'
}

export { isArrayBuffer }
