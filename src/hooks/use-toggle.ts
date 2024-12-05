import { useState } from "react"

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const open = () => setState(true)
  const close = () => setState(false)
  const toggle = () => setState((current) => !current)
  return { state, open, close, toggle }
}
