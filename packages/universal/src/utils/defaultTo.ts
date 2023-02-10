import { isNil } from '@/lang/isNil'
import { isNaN } from '@/lang/isNaN'

/**
 * @description 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者
 *   undefined，那么返回defaultValue默认值。
 * @param {T | null | undefined} value 要检查的值
 * @param {R} defaultValue  默认值
 * @returns {T | R} 返回 resolved 值
 */
function defaultTo<T, R>(value: T | null | undefined, defaultValue: R): T | R {
  if (isNil(value) || isNaN(value)) {
    return defaultValue
  }
  return value
}

export { defaultTo }
