import React from 'react'
import styled from 'styled-components/macro'
import tags from './tags.json'

export default function SnackTags({ currentSnack }) {
  function showTags() {
    return Object.entries(tags).map(([key, value]) => {
      return currentSnack.tags.includes(key) ? (
        <ActiveTagStyled>{value}</ActiveTagStyled>
      ) : (
        <PassiveTagStyled>{value}</PassiveTagStyled>
      )
    })
  }
  return <TagListStyled>{showTags()}</TagListStyled>
}

const TagListStyled = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  > li {
    float: left;
    font-size: 1rem;
    line-height: 1.8rem;
    text-transform: uppercase;
    margin-right: 20px;
    font-weight: bold;
  }
`

const ActiveTagStyled = styled.li`
  color: #4d4600;
`

const PassiveTagStyled = styled.li`
  color: #ddcf3c;
`
