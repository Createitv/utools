/**
 * @description   判断是否为邮箱地址
 * @param  {String} value
 * @return {Boolean}
 */
function isEmail(value: string): boolean {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value,
  )
}

/**
 * @description  判断是否为手机号
 * @param  {String|Number} value
 * @param type 默认 strict 严格模式，非严格模式 中国手机号(宽松), 只要是13,14,15,16,17,18,19开头即可
 * @return {Boolean}
 */
function isTelPhoneNum(value: string, type = 'strict'): boolean {
  if (type === 'strict') {
    return /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(
      value,
    )
  } else {
    return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)
  }
}

/**
 * @description   判断是否为身份证号
 * @param  {String|Number} value
 * @return {Boolean}
 */
function isIdCard(value: string): boolean {
  return /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/.test(
    value,
  )
}

/**
 * @description 判断是否为座机号
 * @param {string} value
 * @returns {boolean}
 */
function isLandlineNum(value: string): boolean {
  return /^0\d{2,3}-?\d{7,8}$/.test(value)
}

/**
 * @description 判断是否为邮政编码
 * @param {string} value
 * @returns {boolean}
 */
function isZipCode(value: string): boolean {
  return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(
    value,
  )
}

/**
 * @description 判断是否为微信号
 * @param {string} value
 * @returns {boolean}
 */
function isWeChat(value: string): boolean {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value)
}

/**
 * @description 判断是否为QQ号
 * @param {string} value
 * @returns {boolean}
 */
function isQQ(value: string): boolean {
  return /^[1-9][0-9]{4,10}$/.test(value)
}

/**
 * @description 判断是否为车牌号
 * @param {string} value
 * @returns {boolean}
 */
function isLicensePlateNum(value: string): boolean {
  return /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(
    value,
  )
}

/**
 * @description 判断是否为港澳通行证
 * @param {string} value
 * @returns {boolean}
 */
function isHongKongAndMacauPass(value: string): boolean {
  return /^[CW]\d{8}$/.test(value)
}

/**
 * @description 判断是否为合理1-120年龄
 * @param {string} value
 * @returns {boolean}
 */
function isAge(value: string): boolean {
  return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(value)
}

export {
  isEmail,
  isIdCard,
  isTelPhoneNum,
  isLandlineNum,
  isZipCode,
  isWeChat,
  isQQ,
  isLicensePlateNum,
  isHongKongAndMacauPass,
  isAge,
}
