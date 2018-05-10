import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import colors from '../../styles/color'

// It's not the perfect regex, but solve the basic problem
const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export default class SearchBar extends React.Component {
  constructor () {
    super()
    this.state = {
      url: ''
    }
  }
  static propTypes = {
    onSubmitLink: PropTypes.func.isRequired,
    isAdding: PropTypes.bool.isRequired
  }
  handleSubmitLink = () => {
    const { url } = this.state
    const { onSubmitLink } = this.props
    onSubmitLink(url)
    this.setState({ url: '' })
  }
  handleInputChange = (e) => {
    const { value } = e.currentTarget
    this.setState({
      url: value
    })
  }
  render () {
    const { url } = this.state
    const { isAdding } = this.props
    const isValidUrl = !!url.match(re)
    return (
      <Main>
        <Input
          placeholder='Past the link you want to shortener here'
          value={url}
          onChange={this.handleInputChange}
        />
        <Button disabled={!isValidUrl || isAdding} onClick={this.handleSubmitLink}>
          {isAdding ? 'Adding...' : 'Shorthen this link'}
        </Button>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 500px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  background-color: ${colors.lightBackground};
  border-radius: 3px;
  display: block;
  font-size: 14px;
  padding: .6rem;
  padding-left: 10px;
  width: 460px;
  
  @media(max-width: 650px) {
    width: 380px;
  }
  
  @media(max-width: 560px) {
    width: 320px;
  }
  
  @media(max-width: 500px) {
    width: 100%
  }
`

const Button = styled.button`
  border-radius: 3px;
  padding: 10px;
  color: ${p => p.disabled ? colors.disabledText : '#FFF'};
  background-color: ${p => p.disabled ? colors.disabledBackground : colors.accent};
  transition: background-color 0.5s ease;
`
