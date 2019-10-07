import React from 'react'
// import picture from "../img/eat-performance-Cashew-Kirsche.png"

export default function Snack({ data }) {
  // console.log(picture)
  return (
    <div>
      <img src={data.picture} alt={data.brand}/>
    </div>
  )
}
