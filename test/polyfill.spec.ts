import { describe, it, expect } from 'jest-without-globals'

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
})
