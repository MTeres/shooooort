import React from 'react'
import styled from 'styled-components'
import LinkFragment from './LinkFragment/LinkFragment'
import colors from '../../styles/color'

export default class LinksList extends React.Component {
  render () {
    const { linksList } = this.props
    return (
      <Main>
        <ClearWrapper>Previously shortened by you
          {!!linksList.length &&
            <ClearButton> Clear history</ClearButton>
          }
        </ClearWrapper>
        <ListWrapper>
          <Header>
            <h1>link</h1>
            <h1>visits</h1>
            <h1>last visited</h1>
          </Header>
          <Content>
            {linksList.map(el => (
              <LinkFragment key={el.shortcode} link={el} />
            ))}
          </Content>
        </ListWrapper>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const ClearWrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
`

const ClearButton = styled.button`
  color: ${colors.accent};
  font-size: 14px;
  margin-left: 20px;
`

const ListWrapper = styled.div`
  margin-top: 20px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    padding-top: 20px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  
  h1 {
    color: ${colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
    
    &:nth-child(1) {
      width: 55%;
    }
  }
`
