import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export default class App extends React.Component {
  render () {
    return (
      <Main>
        Shooooort
      </Main>
    )
  }
}
