/**
 * @description 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数
 * @param {[((value: T) => boolean), ((value: T) => R)][]} pairs 断言函数对。
 * @returns {(value: T) => (R | undefined)} 返回新的复合函数
 */
function cond<T, R>(
  pairs: [(value: T) => boolean, (value: T) => R][],
): (value: T) => R | undefined {
  return function (this: any, value: T): R | undefined {
    const target = pairs.find((pair) => pair[0].call(this, value))
    if (target !== undefined) {
      return target[1].call(this, value)
    }
  }
}

export { cond }
