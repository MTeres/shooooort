import { createReducer } from '../utils'
import axios from 'axios';
const ACTION_ADD = 'links.action.add'

/* ----------------------------------------- *
        Reducer
* ----------------------------------------- */
const initialState = {
  objects: {},
  adding: false,
}

const onUpdateAction = (state, { payload: { target, id } }) => {
  if (target !== 'bag') return state
  return {
    ...state,
    count: (!state.objects[id]) ? (state.count + 1) : (state.count - 1),
    objects: {
      ...state.objects,
      [id]: (!state.objects[id])
    }
  }
}

export default createReducer(initialState, {
  [ACTION_ADD]: onUpdateAction
})

export const addLink = (link) => {
  return {
    type: ACTION_ADD,
    payload: {
    }
  }
}
