import React from 'react'

const App = (props) => {

  document.addEventListener('keydown', props.punch);
  document.addEventListener('keypress', props.punch);

  return (
    <div>
      <img src='../images/heading.jpg' style={props.headingStyle} />
      <div style={props.mainStyle}>
        <img src={props.blueBoxer} style={props.boxerStyle} />
        <img src={props.redBoxer} style={props.boxerStyle} />
      </div>
    </div>
  )
}

export default App
