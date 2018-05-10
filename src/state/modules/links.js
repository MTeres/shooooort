import { createReducer } from '../utils'
import axios from "axios"
const ACTION_ADD_REQUEST = 'links.action.add.request'
const ACTION_ADD_SUCCESS = 'links.action.add.success'
const ACTION_ADD_ERROR = 'links.action.add.error'
const ACTION_UPDATE_REQUEST = 'links.action.update.request'
const ACTION_UPDATE_SUCCESS = 'links.action.update.success'

/* ----------------------------------------- *
        Reducer
* ----------------------------------------- */
const initialState = {
  objects: {},
  isAdding: false
}

const onAddLinkRequest = (state) => {
  return {
    ...state,
    isAdding: true
  }
}

const onAddLinkSuccess = (state, { payload: { shortcode, url } }) => {
  return {
    ...state,
    isAdding: false,
    objects: {
      ...state.objects,
      [shortcode]: {shortcode: shortcode, url: url}
    }
  }
}

const onUpdateLinkRequest = (state, { payload: { shortcode } }) => {
  return {
    ...state,
    objects: {
      ...state.objects,
      [shortcode]: {
        ...state.objects[shortcode],
        isUpdating: true
      }
    }
  }
}

const onUpdateLinkSuccess = (state, { payload: {shortcode, data} }) => {
  return {
    ...state,
    isAdding: false,
    objects: {
      ...state.objects,
      [shortcode]: {
        ...state.objects[shortcode],
        ...data,
        isUpdating: false
      }
    }
  }
}

export default createReducer(initialState, {
  [ACTION_ADD_REQUEST]: onAddLinkRequest,
  [ACTION_ADD_SUCCESS]: onAddLinkSuccess,
  [ACTION_UPDATE_REQUEST]: onUpdateLinkRequest,
  [ACTION_UPDATE_SUCCESS]: onUpdateLinkSuccess
})

export const addLink = (url, data) => {
  return {
    type: ACTION_ADD_SUCCESS,
    payload: { ...data, url }
  }
}

export const addLinkRequest = () => {
  return {
    type: ACTION_ADD_REQUEST,
    payload: {}
  }
}

export const updateLink = (shortcode, data) => {
  return {
    type: ACTION_UPDATE_SUCCESS,
    payload: { data, shortcode }
  }
}

export const updateLinkRequest = (shortcode) => {
  return {
    type: ACTION_UPDATE_REQUEST,
    payload: { shortcode }
  }
}
