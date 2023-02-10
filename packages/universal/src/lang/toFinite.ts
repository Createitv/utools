const MAX_INTEGER = 1.7976931348623157e308

/**
 * @description 最大最小极限值
 * @param value
 * @returns {number}
 */
function toFinite(value: any): number {
  if (value === Infinity) {
    return MAX_INTEGER
  }
  if (value === -Infinity) {
    return -MAX_INTEGER
  }
  const result = Number(value)
  return isNaN(result) ? 0 : result
}

export { toFinite }
