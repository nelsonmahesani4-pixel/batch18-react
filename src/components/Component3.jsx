import React from 'react'

function Component3({ myName }) {
  console.log("Component 3 name is ", myName)
  return (
    <div>
      <h2>Component 3 name is {myName}</h2>
    </div>
  )
}

export default Component3
