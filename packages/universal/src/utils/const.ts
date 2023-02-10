/**
 * @description 创建一个返回 value 的函数
 * @param {T} value 要新函数返回的值
 * @returns {() => T} 返回新的常量函数
 */

function constant<T>(value: T): () => T {
  return function () {
    return value
  }
}

export { constant }
