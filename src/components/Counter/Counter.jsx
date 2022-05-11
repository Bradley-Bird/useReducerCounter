import { useEffect, useState, useReducer } from 'react'

const pinkRGB = `rgb(236, 72, 153)`
const greenRGB = `rgb(52, 211, 153)`
const redRGB = `rgb(239, 68, 68)`
const initialState = { count: 0, CurrentColor: pinkRGB }

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, CurrentColor: action.payload }
    case 'DECREMENT':
      return { count: state.count - 1, CurrentColor: action.payload }
    case 'RESET':
      return { count: 0, CurrentColor: action.payload }
    default:
      // throw new Error('Something went wrong, please try again.')
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [count, setCount] = useState(0)
  // const [currentColor, setCurrentColor] = useState(pinkRGB)
  const handlePayloadLogic = () => {
    if (state.count === 0) {
      return pinkRGB
    }

    if (state.count > 0) {
      return greenRGB
    }

    if (state.count < 0) {
      return redRGB
    }
  }
  // useEffect(() => {

  // }, [state.count])

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: handlePayloadLogic })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const reset = () => {
    dispatch({ type: 'RESET' })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: state.currentColor }}>
        {state.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
