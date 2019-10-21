import React from 'react'
import styled from 'styled-components/macro'
import tags from './tags.json'
import PropTypes from 'prop-types'

SnackTags.propTypes = {
  currentSnack: PropTypes.shape({ tags: PropTypes.array.isRequired }).isRequired
}

export default function SnackTags({ currentSnack }) {
  return (
    <TagListStyled>
      {Object.entries(tags).map(([key, value]) => {
        return currentSnack.tags.includes(key) ? (
          <ActiveTagStyled key={key}>{value}</ActiveTagStyled>
        ) : (
          <PassiveTagStyled key={key}>{value}</PassiveTagStyled>
        )
      })}
    </TagListStyled>
  )
}

const TagListStyled = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  > li {
    float: left;
    font-size: 1rem;
    line-height: 1.7rem;
    text-transform: uppercase;
    margin-right: 1.25rem;
    font-weight: bold;
  }
`

const ActiveTagStyled = styled.li`
  color: #4d4600;
`

const PassiveTagStyled = styled.li`
  color: #ddcf3c;
`
