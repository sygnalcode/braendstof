import React from 'react'

export default function Snack({ data }) {
  return (
    <div>
      <img src={data.picture} alt={data.brand}/>
    </div>
  )
}
