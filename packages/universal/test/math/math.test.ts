// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { add, ceil, subtract, divide, multiply, floor } from 'src/math/math'
import { expect } from '@jest/globals'

describe('add', () => {
  test('math add test', () => {
    expect(add(6, 4)).toBe(10)
    expect(add(3, 0)).toBe(3)
    expect(add(2, -1)).toBe(1)
  })
})

describe('ceil', () => {
  test('math ceil test', () => {
    expect(ceil(6.233444, 4)).toBe(6.2335)
    expect(ceil(6.233444, 2)).toBe(6.24)
    expect(ceil(6.004, 2)).toBe(6.01)
  })
  test('ceil(4.006) => 5', () => {
    expect(ceil(4.006)).toBe(5)
  })

  test('ceil(6.004, 2) => 6.01', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
  })

  test('ceil(6040, -2) => 6100', () => {
    expect(ceil(6040, -2)).toBe(6100)
  })
})

describe('divide', () => {
  test('math divide test', () => {
    expect(divide(6, 4)).toBe(1.5)
    expect(divide(10, 2)).toBe(5)
    expect(divide(6.004, 2)).toBe(3.002)
  })
})

describe('floor', () => {
  test('floor(4.006) => 4', () => {
    expect(floor(4.006)).toBe(4)
  })

  test('floor(0.046, 2) => 0.04', () => {
    expect(floor(0.046, 2)).toBe(0.04)
  })

  test('floor(4060, -2) => 4000', () => {
    expect(floor(4060, -2)).toBe(4000)
  })
})

describe('floor', () => {
  test('multiply(6, 4) => 24', () => {
    expect(multiply(6, 4)).toBe(24)
  })

  test('multiply(12, 100) => 1200', () => {
    expect(multiply(12, 100)).toBe(1200)
  })
})

describe('subtract', () => {
  test('subtract(6, 4) => 2', () => {
    expect(subtract(6, 4)).toBe(2)
  })

  test('subtract(100, 20) => 80', () => {
    expect(subtract(100, 20)).toBe(80)
  })

  test('subtract(100, 1.00001) => 98.9999', () => {
    expect(subtract(100, 1.0001)).toBe(98.9999)
  })
})
