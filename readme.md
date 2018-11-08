# react-styled-shadow-dom ([demo](https://hydrateio.github.io/react-styled-shadow-dom/))

> React **shadow DOM** that works well with **styled-components**.

[![NPM](https://img.shields.io/npm/v/react-styled-shadow-dom.svg)](https://www.npmjs.com/package/react-styled-shadow-dom) [![Build Status](https://travis-ci.com/hydrateio/react-styled-shadow-dom.svg?branch=master)](https://travis-ci.com/hydrateio/react-styled-shadow-dom) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- Uses [react-shadow](https://github.com/Wildhoney/ReactShadow) under the hood
- Makes it really simple to use styled-somponents in shadow DOM
- Useful for testing responsive layouts and ensuring isolation from the parent document

## Install

```bash
npm install --save react-styled-shadow-dom
```

## Usage

Normally, when you try to use [react-shadow](https://github.com/Wildhoney/ReactShadow), CSS styles from [styled-components](https://github.com/styled-components/styled-components) and theming information won't propagate to the shadow DOM.

The following example shows how easy it is to include styled content inside of shadow DOM using `react-styled-shadow-dom`.

```jsx
import React, { Component } from 'react'

import StyledShadow from 'react-styled-shadow-dom'
import styled, { ThemeProvider } from 'styled-components'

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: red;
`

const Text = styled.h4`
  color: #fff;
`

export default () => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <StyledShadow
      style={{
        width: 320,
        margin: '0 auto'
      }}
    >
      <InnerBox>
        <Text>Hello iframe!</Text>
      </InnerBox>
    </StyledShadow>
  </ThemeProvider>
)
```

You can view the above demo live [here](https://hydrateio.github.io/react-styled-shadow-dom).

This seems simple, but it's actually fairly involved. It requires the use of [StyleSheetManager](https://github.com/styled-components/styled-components/pull/1491) in order to properly propagate all styles from styled-components.

## Props

| Property   | Type   | Default                                               | Description                                                                    |
| :--------- | :----- | :---------------------------------------------------- | :----------------------------------------------------------------------------- |
| `children` | node   | **Required**                                          | Iframe body content.                                                           |
| `style`    | object | `{ display: 'block', overflow: 'scroll', border: 0 }` | Override iframe styles. Useful for setting width and height of iframe content. |
| `...rest`  | object |                                                       | Any other props will be passed onto `react-frame-component`.                   |

## Related

- [react-shadow](https://github.com/Wildhoney/ReactShadow) - Renders children in shadow DOM.
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age.

## License

MIT © [hydrateio](https://github.com/hydrateio)
