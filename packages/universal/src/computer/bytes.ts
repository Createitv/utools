/**
 * @description 进制转化函数
 * @param {number} value
 * @returns {string}
 *
 * @example
 * ```
 * // return 1 KB
 * convertBytes(1024)
 * ```
 * @example
 * ```
 * // return 1 MB
 * convertBytes(1024*1024)
 * ```
 * @example
 * ```
 * // return 13.56 GB
 * convertBytes(14562133212)
 * ```
 */
export function convertBytes(value: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let i = 0
  while (value >= 1024) {
    value = Number((value / 1024).toFixed(2))
    i++
  }
  return `${value} ${units[i]}`
}
