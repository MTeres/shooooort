import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/color';

// It's not the perfect regex, but solve the basic problem
const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  }

  handleInputChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      url: value,
    });
  }

  render () {
    const { url } = this.state;
    const isValidUrl = !!url.match(re);
    return (
      <Main>
        <Input
          placeholder='Past the link you want to shortener here'
          value={url}
          onChange={this.handleInputChange}
        />
        <Button disabled={!isValidUrl}>Shorthen this link</Button>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: ${colors.lightBackground};
  border-radius: 3px;
  display: block;
  font-size: 14px;
  padding: .6rem;
  padding-left: 10px;
  width: 460px;
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 10px;
  color: ${p => p.disabled ? colors.disabledText : '#FFF'};
  background-color: ${p => p.disabled ? colors.disabledBackground : colors.accent};
  transition: background-color 0.5s ease;
`;
