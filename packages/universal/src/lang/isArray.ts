/**
 * @description 判断是否是数组
 * @param value
 * @returns {value is any[]}
 */
function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

console.log(isArray(12))

export { isArray }
