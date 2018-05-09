import React from 'react'
import styled from 'styled-components'
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import colors from './styles/color';
import LinksList from "./components/LinksList/LinksList";

export default class App extends React.Component {
  render () {
    return (
      <Main>
        <Content>
          <Header />
          <SearchBarWrapper>
            <SearchBar />
          </SearchBarWrapper>
          <LinksListWrapper>
            <LinksList />
          </LinksListWrapper>
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
  color: ${colors.primaryText};
`

const Content = styled.div`
  width: 660px;
  padding: 20px;
`

const SearchBarWrapper = styled.div`
  margin-top: 40px
`;

const LinksListWrapper = styled.div`
  margin-top: 60px
`;
