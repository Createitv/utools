import dayjs from 'dayjs'

/**
 * @description: 时间格式化
 */
const dateTime = {
  /**
   * 返回 YYYY-MM-DD HH:mm:ss 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatDateTime(timeData: string | number | Date) {
    return dayjs(timeData).format('YYYY-MM-DD HH:mm:ss')
  },
  /**
   * 返回 YYYY-MM-DD 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatDate(timeData: string | number | Date) {
    return dayjs(timeData).format('YYYY-MM-DD')
  },
  /**
   * 返回 YYYY-MM-DD HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatDateHours(timeData: string | number | Date) {
    return dayjs(timeData).format('YYYY-MM-DD HH:mm')
  },
  /**
   * 返回 MM-DD HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatDayHours(timeData: string | number | Date) {
    return dayjs(timeData).format('MM-DD HH:mm')
  },
  /**
   * 返回 HH:mm 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatHours(timeData: string | number | Date) {
    return dayjs(timeData).format('HH:mm')
  },
  /**
   * 返回 HH:mm:ss 格式化的字符串
   * @param {string | number | Date} timeData
   * @return {string}
   */
  formatMinute(timeData: string | number | Date) {
    return dayjs(timeData).format('HH:mm:ss')
  },
  /**
   * 把秒转换成 HH[h]mm[m]ss[s] 的格式
   * @param {number} secondTime 秒
   * @return {string}
   */
  formatSecond(secondTime = 0) {
    let second = 0
    let minute = 0
    let hour = 0

    function _formatHour(timestap: number) {
      hour = Math.floor(timestap / 3600)
      return timestap - hour * 3600
    }
    function _formatMinute(timestap: number) {
      minute = Math.floor(timestap / 60)
      return timestap - minute * 60
    }
    function _formatSecond(timestap: number) {
      second = timestap
      return second
    }
    _formatSecond(_formatMinute(_formatHour(secondTime)))
    return (
      `${hour ? hour + 'h' : ''}${minute ? minute + 'm' : ''}${
        second ? second + 's' : ''
      }` || '0s'
    )
  },
}

/**
 * @description 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */

function isLeapYear(year: number): boolean {
  return 0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)
}

export { dateTime, isLeapYear }
export default dateTime
