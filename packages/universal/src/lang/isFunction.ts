import { _baseGetTag } from './_getTag'

type Func<TS extends any[], R> = (...args: TS) => R

/**
 * @description 判断是函数类型，包括异步函数和生成器函数
 * @param value
 * @returns {value is Func<any[], any>}
 */
function isFunction(value: any): value is Func<any[], any> {
  const tag = _baseGetTag(value)
  return (
    tag === '[object Function]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]'
  )
}

export { isFunction }
