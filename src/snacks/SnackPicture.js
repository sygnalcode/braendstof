import React from 'react'

export default function SnackPicture({ data }) {
  return (
    <div>
      <img src={data.picture} alt={data.brand} />
    </div>
  )
}
