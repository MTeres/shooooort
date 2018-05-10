import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import colors from './styles/color'
import LinksList from './components/LinksList/LinksList'

export default class App extends React.Component {
  static propTypes = {
    handleAddLink: PropTypes.func.isRequired,
    links: PropTypes.object.isRequired,
    handleUpdateLinks: PropTypes.func.isRequired,
    handleClearLinks: PropTypes.func.isRequired
  }
  render () {
    const { handleAddLink, handleClearLinks, handleUpdateLinks, links } = this.props
    const linksList = Object.values(links.objects)
    return (
      <Main>
        <Content>
          <Header />
          <SearchBarWrapper>
            <SearchBar onSubmitLink={handleAddLink} isAdding={links.isAdding}/>
          </SearchBarWrapper>
          <LinksListWrapper>
            <LinksList
              linksList={linksList}
              handleClearLinks={handleClearLinks}
              handleUpdateLinks={handleUpdateLinks}
            />
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
  max-width: 660px;
  padding: 20px;
`

const SearchBarWrapper = styled.div`
  margin-top: 40px
`

const LinksListWrapper = styled.div`
  margin-top: 60px
`
