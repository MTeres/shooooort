import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/color';

export default class LinksList extends React.Component {
  render () {
    return (
      <Main>
        <ClearContainer>Previously shortened by you</ClearContainer>
        <ListContainer>
          <Header>
            <h1>link</h1>
            <h1>visits</h1>
            <h1>last visited</h1>
          </Header>
        </ListContainer>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClearContainer = styled.div`
  display: flex;
  font-size: 16px;
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const Header = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  
  h1 {
    color: ${colors.secondaryText};
    font-size: 14px;
    font-weight: 400;
    
    &:nth-child(1) {
      width: 55%;
    }
  }
`;
