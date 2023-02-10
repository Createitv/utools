/**
 * @description 判断是否是 undefined 类型
 * @param value
 * @returns {value is undefined}
 */
function isUndefined(value: any): value is undefined {
  return value === undefined
}

export { isUndefined }
