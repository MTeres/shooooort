/* ------------------------------------------
   local storage service
--------------------------------------------- */
import isObject from 'lodash/isObject'
export const storageKeys = {
  shortcodeList: 'shoooort-shortcode'
}

const setItem = (key, value) => {
  let computed = value
  if (isObject(value)) {
    computed = JSON.stringify(value) // Transform as a string if Object or Array provided
  }
  window.localStorage.setItem(key, computed)

  return { key: computed }
}

const removeItem = key => window.localStorage.removeItem(key)

const getItem = key => {
  const content = localStorage.getItem(key)
  try {
    return JSON.parse(content) // Parse JSON if valid format
  } catch (e) {
    return content
  }
}

export const setShortCodeObject = shortList => setItem(storageKeys.shortcodeList, shortList)
export const getShortCodeObject = () => getItem(storageKeys.shortcodeList)
export const deletetShortCodeObject = () => removeItem(storageKeys.shortcodeList)
