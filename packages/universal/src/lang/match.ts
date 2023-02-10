/**
 * 判断是否是JSON string
 * @param  {String}  str 所要验证的字符串
 * @return {Boolean}   是否是JSON字符串
 */
import { trim } from '@/string/trim'

export function isJSONStr(str: string) {
  str = trim(str)
  return (
    (str.charAt(0) === '{' && str.charAt(str.length - 1) === '}') ||
    (str.charAt(0) === '[' && str.charAt(str.length - 1) === ']')
  )
}

/**
 * @description 判断是否是函数
 * @param {*} arg
 * @returns
 */
export function isFunction(arg: unknown) {
  if (arg) {
    // eslint-disable-next-line no-constant-condition
    if (typeof /./ !== 'function') {
      return typeof arg === 'function'
    } else {
      return Object.prototype.toString.call(arg) === '[object Function]'
    }
  }
  return false
}

/**
 * @description 判断对象是否一样
 * @param {*} a
 * @param {*} b
 * @returns boolean
 */
export function isEqual(a: any, b: any): boolean {
  for (const key in a) {
    if (
      {}.hasOwnProperty.call(a, key) &&
      (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])
    ) {
      return false
    }
  }
  for (const key in b) {
    if ({}.hasOwnProperty.call(b, key) && !{}.hasOwnProperty.call(a, key)) {
      return false
    }
  }
  return true
}

/**
 * @description 判断是否为空
 * @param data
 * @returns {boolean}
 */
export function isEmpty(data?: any) {
  if (data === '') return true
  if (data === null) return true
  if (data === undefined) return true
  // eslint-disable-next-line no-prototype-builtins
  if (Array.prototype.isPrototypeOf(data) && data.length === 0) return true
  // eslint-disable-next-line no-prototype-builtins
  return Object.prototype.isPrototypeOf(data) && Object.keys(data).length === 0
}

/**
 * @description 判断是否为对象
 * @param obj
 * @returns {boolean}
 */
export function isObj(obj?: any) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
