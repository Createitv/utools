import { divide } from '@/math/divide'

describe('divide', () => {
  test('math divide test', () => {
    expect(divide(6, 4)).toBe(1.5)
    expect(divide(10, 2)).toBe(5)
    expect(divide(6.004, 2)).toBe(3.002)
  })
})
