import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import colors from '../../../styles/color'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import TimeAgo from 'time-ago'

export default class LinkFragment extends React.Component {
  constructor () {
    super()
    this.state = {
      hover: false
    }
  }
  static propTypes = {
    link: PropTypes.object.isRequired
  }
  render () {
    const { link } = this.props
    const { hover } = this.state
    return (
      <Main>
        <CopyToClipboard text={`https://impraise-shorty.herokuapp.com/${link.shortcode}`}>
          <LinkWrapper hover={hover} onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({ hover: false })}>
            <Link>
              <h1>shooooort.com/
                <span>{link.shortcode}</span>
                {hover &&
                <CopyMessage>Click to copy</CopyMessage>
                }
              </h1>
            </Link>
            <h3>{link.url}</h3>
          </LinkWrapper>
        </CopyToClipboard>
        <RedirectCount isLoading={link.isUpdating}>
          {link.redirectCount}
        </RedirectCount>
        <Last isLoading={link.isUpdating}>
          {link.lastSeenDate ? TimeAgo.ago(new Date(link.lastSeenDate)) : 'Never visited'}
        </Last>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinkWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  overflow: hidden;
  width: 55%;
  color: ${colors.secondaryText};
   h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
   }
`

const Link = styled.div`
  h1 {
    color: ${colors.primaryText};
    display: flex;
    font-size: 16px;
    font-weight: 400;
  }
  span {
    color: ${colors.accent};
  }
`

const CopyMessage = styled.span`
  color: ${colors.accent};
  margin-left: auto;
  margin-right: 10px;
`

const RedirectCount = styled.div`
  width: 41px;
  height: 16px;
  text-align: center;
  ${p => p.isLoading && css`
    background-color: ${colors.primaryText};
    animation: ${LoadingAnimation} 1s infinite;
  `}
`

const Last = styled.div`
  width: 85px;
  min-height: 16px;
  height: fit-content;
  text-align: center;
  ${p => p.isLoading && css`
    background-color: ${colors.primaryText};
    animation: ${LoadingAnimation} 1s infinite;
  `}
`

const LoadingAnimation = keyframes`
  0% {
    transform: scale(.9);
  }
  100% {
    transform: scale(1.2);
  }
`
