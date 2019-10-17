import { addDecorator, configure } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import React from 'react'
import GlobalStyles from '../src/common/GlobalStyles'

const withGlobal = story => (
  <React.Fragment>
    <GlobalStyles />
    {story()}
  </React.Fragment>
)

addDecorator(withGlobal)
addDecorator(withInfo)

configure(require.context('../src', true, /\.stories\.js$/), module)
