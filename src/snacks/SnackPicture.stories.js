import React from 'react'
import SnackPicture from './SnackPicture'

export default {
  title: 'SnackPicture'
}

export const example1 = () => (
  <SnackPicture
    data={{
      brand: 'Raw Energy',
      picture:
        'https://res.cloudinary.com/sygnal/image/upload/v1570469934/braendstof/raw-energy-Peanuts-Dates_hfjny9.png'
    }}
  />
)

export const example2 = () => (
  <SnackPicture
    data={{
      brand: 'Raw Bite',
      picture:
        'https://res.cloudinary.com/sygnal/image/upload/v1570469933/braendstof/raw-bite-Protein_smxvpq.png'
    }}
  />
)

export const example3 = () => (
  <SnackPicture
    data={{
      brand: 'nucao',
      picture:
        'https://res.cloudinary.com/sygnal/image/upload/v1570469932/braendstof/nucao-Haselnuss_pug7ra.png'
    }}
  />
)
