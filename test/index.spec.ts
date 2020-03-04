import { describe, it, expect, jest } from 'jest-without-globals'

import { resizeTo } from '../src/index'

import { dimF1, dimF2 } from './fixtures'

describe('window resize ponyfill', () => {
  it('should resize the window', () => {
    resizeTo(window, dimF1.width, dimF1.height)

    expect({ width: window.outerWidth, height: window.outerHeight })
      .toMatchObject(dimF1)

    resizeTo(window, dimF2.width, dimF2.height)

    expect({ width: window.outerWidth, height: window.outerHeight })
      .toMatchObject(dimF2)
  })

  it('should fire an event', () => {
    const resizeHandler = jest.fn()
    window.addEventListener('resize', resizeHandler)
    resizeTo(window, dimF1.width, dimF1.height)

    expect(resizeHandler).toBeCalled()
  })
})
