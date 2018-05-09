export const flatNormalizer = array => array.reduce((acc, c) => ({
  ...acc,
  [c.id]: c
}), {})

export const createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    (Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state)
