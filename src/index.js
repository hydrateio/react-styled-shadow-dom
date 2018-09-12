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

  // TODO: figure out a better way of including static styles, links, and fonts in the iframe
  const initialContent = `
<!DOCTYPE html><html><head>
  ${document.head.innerHTML}
</head><body><div></div></body></html>
`

  return (
    <Frame
      initialContent={initialContent}
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
