/**
 * @description 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
 * @param {T[]} array 需要处理的数组
 * @param {number} size 每个数组区块的长度
 * @returns {T[][]} 返回一个包含拆分区块的新数组（注：相当于一个二维数组）
 */
function chunk<T>(array: T[], size = 1): T[][] {
  if (size < 1) {
    return []
  }
  let result: T[][] = []
  let index = 0
  const len = array.length
  while (index < len) {
    result = [...result, array.slice(index, (index += size))]
  }
  return result
}

/**
 * @description 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @param {(false | "" | 0 | T | null | undefined)[]} array 待处理的数组
 * @returns {T[]} 返回过滤掉假值的新数组
 */
function compact<T>(array: (T | null | undefined | false | '' | 0)[]): T[] {
  return array.filter((value) => !!value) as T[]
}

/**
 * @description 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
 * @param {T[]} array 要查询的数组。
 * @param {number} n 要去除的元素个数
 * @returns {T[]}
 */
function drop<T>(array: T[], n = 1): T[] {
  return array.slice(n)
}

/**
 * @description 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 * @param {T[]} array 要查询的数组
 * @param {number} n 要去除的元素个数
 * @returns {T[]} 返回array剩余切片
 */
function dropRight<T>(array: T[], n = 1): T[] {
  const length = array.length
  return array.slice(0, length - n > 0 ? length - n : 0)
}

/**
 * @description 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
 * @param {T[]} array 要填充改变的数组
 * @param {T} value 填充给 array 的值
 * @param {0} start 开始位置（默认0）
 * @param {number} end (number):结束位置（默认array.length）
 * @returns {T[]}
 */
function fill<T>(array: T[], value: T, start = 0, end = array.length): T[] {
  return array.fill(value, start, end)
}

/**
 * @description 获取数组 array 的第一个元素。
 * @param {T[]} array
 * @returns {T | undefined}
 */
function first<T>(array: T[]): T | undefined {
  return array[0]
}

/**
 * @description 获取数组 array 的最后第一个元素。
 * @param {T[]} array
 * @returns {T | undefined}
 */
function last<T>(array: T[]): T | undefined {
  return array[array.length - 1]
}

/**
 * @description 这个方法返回一个由键值对pairs构成的对象。
 * @param {[K, V][]} pairs  键值对pairs
 * @returns {Record<K, V>} 返回一个新对象
 */
function fromPairs<K extends PropertyKey, V>(pairs: [K, V][]): Record<K, V> {
  const result = {} as Record<K, V>
  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i]
    Object.assign(result, { [key]: value })
  }
  return result
}

/**
 * @description 将 array 中的所有元素转换为由 separator 分隔的字符串。
 * @param {T[]} array
 * @param {string} separator
 * @returns {string}
 */
function join<T>(array: T[], separator = ','): string {
  return array.join(separator)
}

/**
 * @description 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
 * @param {T[]} array 要查询的数组
 * @param {number} n 要返回元素的索引值
 * @returns {T | undefined} 获取array数组的第n个元素
 */
function nth<T>(array: T[], n: number): T | undefined {
  const length = array.length
  return array[(n + length) % length]
}
export {
  chunk,
  compact,
  drop,
  dropRight,
  fill,
  first,
  first as head,
  last,
  last as tail,
  fromPairs,
  join,
  nth,
}
