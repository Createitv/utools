/**
 * @description 判断是否为纯英文
 * @param {string} value
 * @returns {boolean}
 */
function isPureEnglish(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value)
}

/**
 * @description 判断是否为纯小写字母
 * @param {string} value
 * @returns {boolean}
 */
function isPureLowerCharacter(value: string): boolean {
  return /^[a-z]+$/.test(value)
}

/**
 * @description 判断是否为纯大写字母
 * @param {string} value
 * @returns {boolean}
 */
function isPureUpperCharacter(value: string): boolean {
  return /^[A-Z]+$/.test(value)
}

/**
 * @description 判断是否为数字和英文
 * @param {string} value
 * @returns {boolean}
 */
function isNumberAndEnglish(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value)
}

/**
 * @description 包含中文正则
 * @param {string} value
 * @returns {boolean}
 */
function isChinese(value: string): boolean {
  return /^[\u4e00-\u9fa5]+$/.test(value)
}

/**
 * @description 包含中文和英文
 * @param {string} value
 * @returns {boolean}
 */
function isChineseAndEnglish(value: string): boolean {
  return /^[a-zA-Z\u4e00-\u9fa5]+$/.test(value)
}

/**
 * @description 判断是否为中文和数字
 * @param {string} value
 * @returns {boolean}
 */
function isChineseAndNumber(value: string): boolean {
  return /^[0-9\u4e00-\u9fa5]+$/.test(value)
}

/**
 * @description 判断是否为用户名 5-16位，只能包含字母、数字、下划线和减号
 * @param {string} value
 * @returns {boolean}
 */
function isUserName(value: string): boolean {
  return /^[a-zA-Z0-9_-]{5,16}$/.test(value)
}

export {
  isPureEnglish,
  isPureLowerCharacter,
  isPureUpperCharacter,
  isNumberAndEnglish,
  isChinese,
  isChineseAndEnglish,
  isChineseAndNumber,
  isUserName,
}
