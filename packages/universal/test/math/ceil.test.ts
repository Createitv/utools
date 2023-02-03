import { ceil } from '@/math/ceil'

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
