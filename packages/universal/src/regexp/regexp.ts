/**
 * @description 判断是否为16进制颜色，rgb 或 rgba
 * @param  {String} value
 * @return {Boolean}
 */
function isColor(value: string): boolean {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
    value,
  )
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String} value
 * @return {Boolean}
 */
function isEmail(value: string): boolean {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)
}

/**
 * @desc  判断是否为身份证号
 * @param  {String|Number} value
 * @return {Boolean}
 */
function isIdCard(value: string): boolean {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    value,
  )
}
/**
 * @desc   判断是否为手机号
 * @param  {String|Number} value
 * @return {Boolean}
 */
function isPhoneNum(value: string): boolean {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(value)
}

/**
 * @desc   判断是否为URL地址
 * @param  {String} value
 * @return {Boolean}
 */
function isUrl(value: string): boolean {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    value,
  )
}

export { isColor, isEmail, isIdCard, isPhoneNum, isUrl }
