import React from 'react'
import styled from 'styled-components'
import Header from "./components/Header/Header";

export default class App extends React.Component {
  render () {
    return (
      <Main>
        <Content>
          <Header />
        </Content>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const Content = styled.div`
  width: 660px;
  padding: 20px;
`
