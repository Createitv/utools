/**
 * @ description 判断两个对象值是否一样
 * @param value
 * @param other
 * @returns {boolean}
 */
function eq(value: any, other: any): boolean {
  return Object.is(value, other)
}

export { eq }
