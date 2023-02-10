/**
 * @description 判断是否是 null 或者 undefined 类型
 * @param value
 * @returns {value is null | undefined}
 */
function isNil(value: any): value is null | undefined {
  return value === null || value === undefined
}

export { isNil }
