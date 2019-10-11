import React from 'react'
import styled from 'styled-components/macro'
import tags from './tags.json'

export default function SnackTags() {
  function showTags() {
    let tagKeys = []
    for (const [key, value] of Object.entries(tags)) {
      tagKeys = currentSnack.tags.includes(key)
        ? [...tagKeys, <ActiveTagStyled>{value}</ActiveTagStyled>]
        : [...tagKeys, <PassiveTagStyled>{value}</PassiveTagStyled>]
    }
    return tagKeys
  }

  return <TagListStyled>{showTags()}</TagListStyled>
}

const TagListStyled = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  & li {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-right: 24px;
    font-weight: bold;
  }
`

const ActiveTagStyled = styled.li`
  color: #4d4600;
`

const PassiveTagStyled = styled.li`
  color: #ddcf3c;
`
