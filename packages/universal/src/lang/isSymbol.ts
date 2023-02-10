/**
 * @description 判断是否是 Symbol 类型
 * @param value
 * @returns {value is symbol}
 */
function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol'
}

export { isSymbol }
