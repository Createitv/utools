import { isError } from '@/lang/isError'

/**
 * @description 尝试调用func，返回结果 或者 捕捉错误对象
 * @param {(...args: any[]) => T} func
 * @param args
 * @returns {Error | T}
 */
function attempt<T>(func: (...args: any[]) => T, ...args: any[]): T | Error {
  try {
    return func.call(undefined, ...args)
  } catch (error) {
    return isError(error) ? error : new Error(error as string)
  }
}

export { attempt }
