import React, { Component } from 'react'

import StyledFrame from 'react-styled-frame'
import styled, { ThemeProvider } from 'styled-components'

const Body = styled.div`
  padding: 1em;
`

const OuterBox = styled.div`
  margin-bottom: 2em;
  text-align: center;
`

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

export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Body>
          <OuterBox>
            If this demo is working properly for you, you should see a red iframe containing white text, all styled via <a href='https://github.com/styled-components/styled-components'>styled-components</a>.
          </OuterBox>

          <StyledFrame
            style={{
              width: 320,
              margin: '0 auto'
            }}
          >
            <InnerBox>
              <Text>
                Hello iframe!
              </Text>
            </InnerBox>
          </StyledFrame>
        </Body>
      </ThemeProvider>
    )
  }
}
