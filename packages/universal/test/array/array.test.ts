import { describe, expect } from '@jest/globals'
import {
  chunk,
  compact,
  drop,
  dropRight,
  fill,
  first,
  head,
  last,
  tail,
  fromPairs,
  join,
  nth,
} from '@/array/array'

describe('test array tools function', () => {
  it('test chunk function', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([
      ['a', 'b'],
      ['c', 'd'],
    ])
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 3)).toStrictEqual([
      ['a', 'b', 'c'],
      ['d', 'e'],
    ])
  })

  it('test compact function', () => {
    expect(compact([0, 1, false, '', null, undefined, 5])).toStrictEqual([1, 5])
  })

  it('test drop function', () => {
    expect(drop(['a', 'b', 'c'], 2)).toStrictEqual(['c'])
    expect(drop(['a', 'b', 'c'], 1)).toStrictEqual(['b', 'c'])
    expect(drop([1, 3, 4, 5, 6, 10], 3)).toStrictEqual([5, 6, 10])
    expect(drop([1, 3, [4, 5], 6, 10], 1)).toStrictEqual([3, [4, 5], 6, 10])
  })

  it('test dropRight function', () => {
    expect(dropRight(['a', 'b', 'c'], 2)).toStrictEqual(['a'])
    expect(dropRight(['a', 'b', 'c'], 1)).toStrictEqual(['a', 'b'])
    expect(dropRight([1, 3, 4, 5, 6, 10], 3)).toStrictEqual([1, 3, 4])
    expect(dropRight([1, 3, [4, 5], 6, 10], 1)).toStrictEqual([1, 3, [4, 5], 6])
  })

  it('test fill function', () => {
    expect(fill(['a', 'b', 'c', 'd', 'e'], '*', 2)).toStrictEqual([
      'a',
      'b',
      '*',
      '*',
      '*',
    ])
    expect(fill(['1', '2', '3', 'd', 'e'], '-', 2)).toStrictEqual([
      '1',
      '2',
      '-',
      '-',
      '-',
    ])
  })

  it('test first / head  function', () => {
    expect(first(['a', 'b', 'c'])).toStrictEqual('a')
    expect(first([['c', 'c'], 'a', 'b', 'c'])).toStrictEqual(['c', 'c'])

    expect(head(['a', 'b', 'c'])).toStrictEqual('a')
    expect(head([['c', 'c'], 'a', 'b', 'c'])).toStrictEqual(['c', 'c'])
  })

  it('test last / tail  function', () => {
    expect(last(['a', 'b', 'c'])).toStrictEqual('c')
    expect(last([['c', 'c'], 'a', 'b', 'c'])).toStrictEqual('c')

    expect(tail(['a', 'b', 'c'])).toStrictEqual('c')
    expect(tail([['c', 'c'], 'a', 'b', 'c'])).toStrictEqual('c')
  })

  it('test fromPairs function', () => {
    expect(
      fromPairs([
        ['a', 'c'],
        ['b', 'z'],
        ['c', 'g'],
      ]),
    ).toStrictEqual({ a: 'c', b: 'z', c: 'g' })
    expect(
      fromPairs([
        ['fred', 30],
        ['barney', 40],
      ]),
    ).toStrictEqual({ fred: 30, barney: 40 })
  })

  it('test join function', () => {
    expect(join(['a', 'b', 'c'])).toBe('a,b,c')
    expect(join(['a', 'b', 'c'], '-')).toBe('a-b-c')
  })

  it('test nth function', () => {
    expect(nth([1, 23, 4, 5], 3)).toBe(5)
    expect(nth([1, 23, [4, 5], 4], 3)).toBe(4)
  })
})
