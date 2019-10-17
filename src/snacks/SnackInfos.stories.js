import React from 'react'
import { withInfo } from '@storybook/addon-info'
import SnackInfos from './SnackInfos'

export default {
  title: 'SnackInfos',
  decorators: [withInfo]
}

export const small = () => (
  <SnackInfos
    snacksData={[
      {
        brand: 'eat performance',
        flavor: 'Cashew & Kirsche',
        tags: [
          'raw',
          'lowsugar',
          'soyfree',
          'bio',
          'noaddedsugar',
          'noaddedcoloring',
          'bio',
          'ketogenic',
          'organic'
        ],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et dolore.',
        price: 2.0
      }
    ]}
    scrollYPosition="0"
  />
)
