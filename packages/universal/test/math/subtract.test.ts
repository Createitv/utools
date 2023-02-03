import { subtract } from '@/math/subtract'

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
