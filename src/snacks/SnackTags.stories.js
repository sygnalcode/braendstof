import React from 'react'
import { withInfo } from '@storybook/addon-info'
import SnackTags from './SnackTags'

export default {
  title: 'SnackTags',
  decorators: [withInfo, StoryWrapper]
}

function StoryWrapper(storyFn) {
  return (
    <div
      style={{
        width: '820px',
        height: '138px',
        background: '#fff379',
        paddingTop: '10px',
        paddingLeft: '30px'
      }}
    >
      {storyFn()}
    </div>
  )
}

export const Example = () => (
  <SnackTags
    currentSnack={{
      tags: [
        'paleo',
        'raw',
        'vegan',
        'lowcarb',
        'soyfree',
        'grainfree',
        'glutenfree',
        'bio',
        'organic',
        'noaddedflavors',
        'highprotein',
        'noaddedsugar',
        'ketogenic'
      ]
    }}
  />
)
