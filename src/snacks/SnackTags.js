import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { getSnackTags } from './snacksDataServices'

SnackTags.propTypes = {
  currentSnack: PropTypes.shape({ tags: PropTypes.array.isRequired }).isRequired
}

export default function SnackTags({ currentSnack }) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getSnackTags().then(response => {
      let entries = Object.entries(response[0])
      setTags(entries)
    })
  }, [])

  return (
    <TagListStyled>
      {tags.slice(1).map(([key, value]) =>
        currentSnack.tags.includes(key) ? (
          <ActiveTagStyled key={key}>{value}</ActiveTagStyled>
        ) : (
          <PassiveTagStyled key={key}>{value}</PassiveTagStyled>
        )
      )}
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
    line-height: 1.6rem;
    text-transform: uppercase;
    margin-right: 18px;
    font-weight: bold;
  }
`

const ActiveTagStyled = styled.li`
  color: #4d4600;
`

const PassiveTagStyled = styled.li`
  color: #ddcf3c;
`
