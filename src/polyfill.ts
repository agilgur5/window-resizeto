// we don't check `if (!('resizeTo' in window))` first because JSDOM sets it to
// a function that throws a "Not Implemented" error, so it will always exist

import { resizeTo } from './index'

window.resizeTo = function (width, height) {
  resizeTo(this, width, height)
}
