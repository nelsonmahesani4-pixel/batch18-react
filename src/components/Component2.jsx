import React from 'react'
import Component3 from './Component3'

function Component2({ myName }) {
    console.log("Component 2 name is ", myName)
  return (
    <div>
      <h2>Component 2 name is {myName}</h2>
      <Component3 myName={myName} />
    </div>
  )
}

export default Component2
