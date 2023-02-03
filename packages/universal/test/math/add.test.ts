import { add } from '@/math/add'

describe('add', () => {
  test('math add test', () => {
    expect(add(6, 4)).toBe(10)
    expect(add(3, 0)).toBe(3)
    expect(add(2, -1)).toBe(1)
  })
})
