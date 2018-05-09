import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/color';

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
    return (
      <Main>
        <Input
          placeholder='Past the link you want to shortener here'
          value={url}
          onChange={this.handleInputChange}
        />
        <Button>Shorthen this link</Button>
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
  color: #FFF;
  background-color: ${colors.accent};
`;
