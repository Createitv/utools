/**
 * @description 判断是否 ObjectLike 类型
 * @param value
 * @returns {boolean}
 */
function isObjectLike(value: any): boolean {
  return value !== null && typeof value === 'object'
}

export { isObjectLike }
