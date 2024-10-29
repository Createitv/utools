import { randomColor } from '../../src/math/random'

describe('randomColor', () => {
  it('should expose a function', () => {
    expect(randomColor).toBeDefined()
  })

  it('randomColor should return expected output', () => {
    const retValue = randomColor()
    expect(retValue.length).toBe(7)
    expect(retValue.startsWith('#')).toBeTruthy()
    expect(typeof parseInt(retValue.slice(-1)) === 'number').toBeTruthy()
  })
})
