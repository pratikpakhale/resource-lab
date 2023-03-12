import { useState } from 'react'

function useLocalStorageState(key, defaultValue = '') {
  // uses localstorage to store the state
  const [state, setState] = useState(() => {
    let value
    try {
      value = window.localStorage.getItem(key) || defaultValue
    } catch (e) {
      value = defaultValue
    }
    return value
  })

  // sets the state
  const setValue = value => {
    window.localStorage.setItem(key, value)
    setState(value)
  }

  return [state, setValue]
}

export default useLocalStorageState
