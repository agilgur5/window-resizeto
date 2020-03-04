# window-resizeTo

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/window-resizeTo.svg)](https://npmjs.org/package/window-resizeTo)
[![releases](https://img.shields.io/github/tag-pre/agilgur5/window-resizeTo.svg)](https://github.com/agilgur5/window-resizeTo/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/window-resizeTo/v1.0.3.svg)](https://github.com/agilgur5/window-resizeTo/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/window-resizeTo.svg)](https://npmjs.org/package/window-resizeTo)
[![dy](https://img.shields.io/npm/dy/window-resizeTo.svg)](https://npmjs.org/package/window-resizeTo)
[![dm](https://img.shields.io/npm/dm/window-resizeTo.svg)](https://npmjs.org/package/window-resizeTo)
[![dw](https://img.shields.io/npm/dw/window-resizeTo.svg)](https://npmjs.org/package/window-resizeTo)
<br><!-- status / activity -->
[![typings](https://img.shields.io/npm/types/window-resizeTo.svg)](https://github.com/agilgur5/window-resizeTo/blob/master/src/index.tsx)
[![build status](https://img.shields.io/travis/agilgur5/window-resizeTo/master.svg)](https://travis-ci.org/agilgur5/window-resizeTo)
[![code coverage](https://img.shields.io/codecov/c/gh/agilgur5/window-resizeTo/master.svg)](https://codecov.io/gh/agilgur5/window-resizeTo)
<br>
[![NPM](https://nodei.co/npm/window-resizeTo.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/window-resizeTo)
<br>
A [`window.resizeTo`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo) polyfill for test environments like Jest & JSDOM.

## Installation

`npm i -D window-resizeTo`

## Usage

With Jest:

```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: [
    // polyfill window.resizeTo
    'window-resizeTo/polyfill'
  ]
}
```

Standalone with the polyfill:

```javascript
import 'window-resizeTo/polyfill'

window.resizeTo(500, 500)
// window is now resized to 500x500
```

With the ponyfill:

```javascript
import { resizeTo } from 'window-resizeTo'

resizeTo(window, 500, 500)
// window is now resized to 500x500
```

## How it works

Basically just sets the `window`'s `outerWidth`, `outerHeight`, `innerWidth`, `innerHeight`, and fires a `resize` event.
The source code is currently just <10 LoC, so [take a look under the hood](./src/)! :)

## Credits

Inspiration for creating this came from [`mq-polyfill`](https://github.com/bigslycat/mq-polyfill) and a few [other](https://spectrum.chat/testing-library/help-react/how-to-set-window-innerwidth-to-test-mobile~70aa9572-b7cc-4397-92f5-a09d75ed24b8?m=MTU1OTU5MTI2MTI0MQ==) code samples that are nearly exact replicas.
I wanted a package I could re-use in my projects' tests instead of having to constantly create a helper file, and so `window-resizeTo` was born!
