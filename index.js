import React from 'react'
import ReactDOM from 'react-dom'

import state from './state'
import App from './App'

const punch = (e) => {
  let key = e.which

  if (key === 119) {
    state.blueBoxer = '../images/blue-punch.jpg'
    render()
  }
  setTimeout( ()=> {
    state.blueBoxer = '../images/blue.jpg'
    render()
  }, 500)

  if (key === 38) {
    console.log('hi');
    state.redBoxer = '../images/red-punch.jpg'
    render()
  }
  setTimeout( ()=> {
    state.redBoxer = '../images/red.jpg'
    render()
  }, 500)
}

state.punch = punch

const render = () => {
  ReactDOM.render(App(state), document.getElementById('root'))
}

render()
