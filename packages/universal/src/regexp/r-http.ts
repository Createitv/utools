/**
 * @description   判断是否为URL地址
 * @param  {String} value
 * @return {Boolean}
 */
function isUrl(value: string): boolean {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
    value,
  )
}

/**
 * @description   判断是否为IPV4地址
 * @param {string} value
 * @returns {boolean}
 */
function isIpv4(value: string): boolean {
  return /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/.test(
    value,
  )
}

/**
 * @description   判断是否为IPV6地址
 * @param {string} value
 * @returns {boolean}
 */
function isIpv6(value: string): boolean {
  return /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/.test(value)
}

export { isUrl, isIpv4, isIpv6 }
