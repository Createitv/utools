/**
 * @description 这个方法返回首个提供的参数
 * @param {T} value
 * @returns {T}
 */
function identity<T>(value: T): T {
  return value
}

export { identity }
