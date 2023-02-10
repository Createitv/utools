import { identity } from './identity'

/**
 * @description
 * @param {number} n 调用 iteratee 的次数。
 * @param {(index: number) => R} iteratee 每次迭代调用的函数。
 * @returns {R[]}  返回调用结果的数组
 */
function times<R>(
  n: number,
  iteratee: (index: number) => R = identity as any,
): R[] {
  return Array.from(new Array(n), (_deprecated, index) => iteratee(index))
}

console.log(times(3, String))
export { times }
