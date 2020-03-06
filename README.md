# window-resizeto

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/window-resizeto.svg)](https://npmjs.org/package/window-resizeto)
[![releases](https://img.shields.io/github/tag-pre/agilgur5/window-resizeto.svg)](https://github.com/agilgur5/window-resizeto/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/window-resizeto/latest.svg)](https://github.com/agilgur5/window-resizeto/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/window-resizeto.svg)](https://npmjs.org/package/window-resizeto)
[![dy](https://img.shields.io/npm/dy/window-resizeto.svg)](https://npmjs.org/package/window-resizeto)
[![dm](https://img.shields.io/npm/dm/window-resizeto.svg)](https://npmjs.org/package/window-resizeto)
[![dw](https://img.shields.io/npm/dw/window-resizeto.svg)](https://npmjs.org/package/window-resizeto)
<br><!-- status / activity -->
[![typings](https://img.shields.io/npm/types/window-resizeto.svg)](https://github.com/agilgur5/window-resizeto/blob/master/src/index.tsx)
[![build status](https://img.shields.io/travis/agilgur5/window-resizeto/master.svg)](https://travis-ci.org/agilgur5/window-resizeto)
[![code coverage](https://img.shields.io/codecov/c/gh/agilgur5/window-resizeto/master.svg)](https://codecov.io/gh/agilgur5/window-resizeto)
<br>
[![NPM](https://nodei.co/npm/window-resizeto.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/window-resizeto)
<br>
A [`window.resizeTo`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo) polyfill for test environments like Jest & JSDOM.

## Installation

`npm i -D window-resizeto`

## Usage

There are a few different ways you can use `window-resizeto`:

- With Jest:

  ```javascript
  // jest.config.js
  module.exports = {
    setupFilesAfterEnv: [
      // polyfill window.resizeTo
      'window-resizeto/polyfill'
    ]
  }
  ```

  ```javascript
  // some-test.spec.js
  window.resizeTo(500, 500)
  // window is now resize to 500x500
  ```

- Standalone with the polyfill:

  ```javascript
  import 'window-resizeto/polyfill'

  window.resizeTo(500, 500)
  // window is now resized to 500x500
  ```

- With the ponyfill:

  ```javascript
  import { resizeTo } from 'window-resizeto'

  resizeTo(window, 500, 500)
  // window is now resized to 500x500
  ```

## How it works

Basically just sets the `window`'s `outerWidth`, `outerHeight`, `innerWidth`, `innerHeight`, and fires a `resize` event.
The source code is currently just <10 LoC, so [take a look under the hood](./src/)! :)

## Credits

Inspiration for creating this came from [`mq-polyfill`](https://github.com/bigslycat/mq-polyfill) and a few [other](https://spectrum.chat/testing-library/help-react/how-to-set-window-innerwidth-to-test-mobile~70aa9572-b7cc-4397-92f5-a09d75ed24b8?m=MTU1OTU5MTI2MTI0MQ==) code samples that are nearly exact replicas.
I wanted a package I could re-use in my projects' tests instead of having to constantly create a helper file, and so `window-resizeto` was born!
