import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/color';

export default class Header extends React.Component {
  render () {
    return (
      <Main>
        <Tittle>Shooooort</Tittle>
        <Desc>The link shortener with a long name</Desc>
      </Main>
    )
  }
}

const Main = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Tittle = styled.h1`
  color: ${colors.accent};
  font-size: 47px;
`

const Desc = styled.span`
  font-size: 14px;
  color: ${colors.secondaryText};
`
