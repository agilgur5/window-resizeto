import { describe, it, expect, jest } from 'jest-without-globals'

import '../src/polyfill'

import { dimF1, dimF2 } from './fixtures'

describe('window resize polyfill', () => {
  it('should resize the window', () => {
    window.resizeTo(dimF1.width, dimF1.height)

    expect({ width: window.outerWidth, height: window.outerHeight })
      .toMatchObject(dimF1)

    window.resizeTo(dimF2.width, dimF2.height)

    expect({ width: window.outerWidth, height: window.outerHeight })
      .toMatchObject(dimF2)
  })

  it('should fire an event', () => {
    const resizeHandler = jest.fn()
    window.addEventListener('resize', resizeHandler)
    window.resizeTo(dimF1.width, dimF1.height)

    expect(resizeHandler).toBeCalled()
  })
})
