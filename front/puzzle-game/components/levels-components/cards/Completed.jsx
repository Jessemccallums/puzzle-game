import React from 'react'

export default function Completed({completed}) {
  return (
    <div>
        {completed && <h2>Completed</h2>}
    </div>
  )
}
