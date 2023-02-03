interface BrowserInter {
  chrome?: string
  ie?: string
  edge?: string
  firefox?: string
  safari?: string
  opera?: string
}

export function browserCheck() {
  const Sys: BrowserInter = {}
  if (isMobileDevice()) {
    return true
  } // 忽略移动设备
  const ua = navigator.userAgent.toLowerCase()
  let s
  // prettier-ignore
  // eslint-ignore
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1]
    : (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1]
      : (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1]
        : (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1]
          : (s = ua.match(/(?:opera|opr).([\d.]+)/)) ? Sys.opera = s[1]
            : (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1]
              : (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
  return !!(
    (Sys.chrome && parseInt(Sys.chrome.split('.')[0], 10) >= 66) ||
    Sys.firefox
  )
}

/**
 * description: 判断是否为手机端
 * @returns {boolean}
 */
export function isMobileDevice(): boolean {
  const userAgent = navigator.userAgent.toLowerCase()
  return /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(
    userAgent,
  )
}

/**
 * description: 判断是否为 MacOS系统
 * @returns {boolean}
 */
export function isMacOs() {
  return navigator.userAgent.indexOf('Macintosh') > -1
}

/**
 * description: 判断是否为 Windows 系统
 * @returns {boolean}
 */
export function isWindows() {
  return navigator.userAgent.indexOf('Windows') > -1
}

/**
 * 根据参数名获取URL数据
 * @param  {[type]} name [description]
 * @param  {[type]} url  [description]
 */
export function getParameterByName(name: string, url?: string) {
  if (!url) {
    url = window.location.href
  }
  name = name.replace(/[\[\]]/g, '\\$&')
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')

  const results = regex.exec(url)
  if (!results) {
    return null
  }
  if (!results[2]) {
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

/**
 * @description 生成一个时间戳的Key
 * @returns {string}
 */
export function generateAKey() {
  return '' + new Date().getTime() + ~~(Math.random() * 1000000)
}

/**
 * @description 判断手机号
 * @param {string} tel
 * @returns {boolean}
 */
export function isPhoneNumber(tel: string) {
  const reg = /^0?1[3|4|5|6|7|8][0-9]\d{8}$/
  return reg.test(tel)
}

/**
 * 随机生成一串6位同时包含数字、大小写字母的字符串
 * @param len number
 */
export function getRandomStr(len: number): string {
  const numChar = '0123456789'
  const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'
  function getChar(baseChar: string) {
    const randomIndex = Math.random() * (baseChar.length - 1)
    return baseChar.charAt(randomIndex)
  }
  let currentChar = 'num'
  let str = ''
  for (let i = 0; i < len; i++) {
    if (currentChar === 'num') {
      str += getChar(numChar)
      currentChar = 'lower'
    } else if (currentChar === 'lower') {
      str += getChar(lowerCaseChar)
      currentChar = 'upper'
    } else if (currentChar === 'upper') {
      str += getChar(upperCaseChar)
      currentChar = 'num'
    }
  }
  return str
}
