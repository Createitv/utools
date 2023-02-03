import { multiply } from '@/math/multiply'
import { expect } from '@jest/globals'

describe('floor', () => {
  test('multiply(6, 4) => 24', () => {
    expect(multiply(6, 4)).toBe(24)
  })

  test('multiply(12, 100) => 1200', () => {
    expect(multiply(12, 100)).toBe(1200)
  })
})
