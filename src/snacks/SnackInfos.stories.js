import React from 'react'
import SnackInfos from './SnackInfos'

export default {
  title: 'SnackInfos'
}

export const small = () => (
  <SnackInfos
    snacksData={[
      {
        brand: 'eat performance',
        flavor: 'Cashew & Kirsche',
        tags: ['raw', 'lowsugar', 'soyfree', 'bio'],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et dolore.',
        price: 2.0
      }
    ]}
    scrollYPosition="0"
  />
)
