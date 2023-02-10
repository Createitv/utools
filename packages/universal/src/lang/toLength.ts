import { toInteger } from '@/lang/toInteger'

function toLength(value: any): number {
  const result = toInteger(value)
  return result < 0 ? 0 : result > 4294967295 ? 4294967295 : result
}

export { toLength }
