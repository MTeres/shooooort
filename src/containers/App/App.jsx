/* ------------------------------------------
   App - Container
--------------------------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import App from '../../App'
import axios from 'axios'
import { addLink, addLinkRequest, updateLink, updateLinkRequest, clearLinks } from '../../state/modules/links'
const mapStateToProps = ({ links }) => {
  return { links }
}
const bindActions = { addLinkRequest, addLink, updateLink, updateLinkRequest, clearLinks }
const decorator = connect(mapStateToProps, bindActions)

class AppContainer extends Component {
  static displayName = 'AppContainer'
  static propTypes = {
    addLink: PropTypes.func.isRequired,
    addLinkRequest: PropTypes.func.isRequired,
    clearLinks: PropTypes.func.isRequired,
    links: PropTypes.object.isRequired,
    updateLink: PropTypes.func.isRequired,
    updateLinkRequest: PropTypes.func.isRequired
  }

  postAddLink (url) {
    return axios({
      method: 'post',
      url: '/shorten',
      data: {
        url: url
      }
    })
  }

  getLinkInfo (shortcode) {
    return axios({
      method: 'get',
      url: `https://impraise-shorty.herokuapp.com/${shortcode}/stats`
    })
  }

  AddLinkSolver (url) {
    const { addLink, addLinkRequest } = this.props
    addLinkRequest()
    return new Promise((resolve, reject) => {
      this.postAddLink(url)
        .then((response) => {
          addLink(url, response.data)
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
  }

  UpdateLinkSolver (shortcode) {
    const { updateLink, updateLinkRequest } = this.props
    updateLinkRequest(shortcode)
    return new Promise((resolve, reject) => {
      this.getLinkInfo(shortcode)
        .then((response) => {
          updateLink(shortcode, response.data)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  handleAddLink = (url) => {
    this.AddLinkSolver(url).then((response) => {
      this.UpdateLinkSolver(response.data.shortcode)
    })
  }

  handleUpdateLinks = () => {
    const { links } = this.props
    const linksList = Object.values(links.objects)
    linksList.forEach(el => {
      this.UpdateLinkSolver(el.shortcode)
    })
  }

  render () {
    const { links, clearLinks } = this.props
    return (
      <App
        handleAddLink={this.handleAddLink}
        handleClearLinks={clearLinks}
        handleUpdateLinks={this.handleUpdateLinks}
        links={links}
      />
    )
  }
}

export default decorator(AppContainer)
