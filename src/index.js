import React from 'react'
import Frame, { FrameContextConsumer } from 'react-frame-component'
import { StyleSheetManager, withTheme, ThemeProvider } from 'styled-components'

export default withTheme((props) => {
  const {
    theme,
    style = { },
    children,
    ...rest
  } = props

  return (
    <Frame
      style={{
        display: 'block',
        overflow: 'scroll',
        border: 0,
        ...style
      }}
      {...rest}
    >
      <FrameContextConsumer>
        {(frameContext) => (
          <StyleSheetManager target={frameContext.document.head}>
            {theme ? (
              <ThemeProvider theme={theme}>
                {children}
              </ThemeProvider>
            ) : (
              children
            )}
          </StyleSheetManager>
        )}
      </FrameContextConsumer>
    </Frame>
  )
})
