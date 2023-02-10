/**
 * @description 判断是否是对象
 * @param value
 * @returns {value is object}
 */
function isObject(value: any): value is object {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export { isObject }
