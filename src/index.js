import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import ShadowDOM from 'react-shadow'
import { StyleSheetManager, withTheme, ThemeProvider } from 'styled-components'

export default withTheme((props) => {
  const { theme, children, ...rest } = props
  let styles = ''

  const GenerateStyles = (props) => {
    const container = document.createElement('div')
    const target = document.createElement('div')

    if (!styles) {
      const promise = new Promise((resolve) => {
        ReactDOM.render(
          <StyleSheetManager target={target}>
            {theme ? (
              <ThemeProvider theme={theme}>{children}</ThemeProvider>
            ) : (
              children
            )}
          </StyleSheetManager>,
          container,
          () => {
            styles = target.innerHTML
            resolve()
          }
        )
      })

      throw promise
    }

    return props.children({ styles })
  }

  return (
    <div {...rest}>
      <Suspense fallback={<div>Loading...</div>}>
        <GenerateStyles>
          {({ styles }) => (
            <ShadowDOM nodeName='div'>
              <div>
                <div dangerouslySetInnerHTML={{ __html: styles }} />
                {children}
              </div>
            </ShadowDOM>
          )}
        </GenerateStyles>
      </Suspense>
    </div>
  )
})
