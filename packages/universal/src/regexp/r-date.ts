/**
 * @description 判断是否为日期
 * @param value
 * @returns {boolean}
 */
function isValidDate(value: any): boolean {
  return !isNaN(Date.parse(value))
}

/**
 * @description 判断是否为日期时间
 * @param value
 * @returns {boolean}
 */
function isValidDataTime(value: any): boolean {
  return /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/.test(
    value,
  )
}

export { isValidDataTime, isValidDate }
