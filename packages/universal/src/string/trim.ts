/**
 * @description: 去除字符串前后空格
 * @param: str 带有空格的字符串
 * @returns: 返回去除前后空格的字符串
 */
export function trim(str: string) {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

/**
 * @description: 去除字符串的所有空格
 * @param: str 带有空格的字符串
 * @returns: 返回去除所有空格的字符串
 */
export function trimAll(str: string) {
  return str.replace(/\s/g, '')
}
