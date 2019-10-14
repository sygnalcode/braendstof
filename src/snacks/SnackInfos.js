import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import tags from './tags.json'

export default function SnackInfos({ snacksData, scrollYPosition }) {
  const [currentSnack, setCurrentSnack] = useState(snacksData[0])

  useEffect(() => {
    handleScrollEvent(scrollYPosition)
  })

  function handleScrollEvent(scrollPosition) {
    const index = Math.round(scrollPosition / 340)
    setCurrentSnack(snacksData[index])
  }

  function showTags() {
    let tagKeys = []
    for (const [key, value] of Object.entries(tags)) {
      tagKeys = currentSnack.tags.includes(key)
        ? [...tagKeys, <ActiveTagStyled>{value}</ActiveTagStyled>]
        : [...tagKeys, <PassiveTagStyled>{value}</PassiveTagStyled>]
    }
    return tagKeys
  }

  return (
    <FooterBackgroundStyled>
      <FooterContentStyled>
        <HeadlineBackgroundStyled />
        <h1>{currentSnack.brand}</h1>
        <h2>{currentSnack.flavor}</h2>
        <TagListStyled>{showTags()}</TagListStyled>
        <DescriptionAndPriceStyled>
          <p>{currentSnack.description}</p>
          <PriceStyled>€&nbsp;{currentSnack.price.toFixed(2)}</PriceStyled>
        </DescriptionAndPriceStyled>
      </FooterContentStyled>
    </FooterBackgroundStyled>
  )
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

const FooterContentStyled = styled.section`
  display: grid;
  margin: 0 auto;
  width: 1040px;
  padding-top: 40px;
`

const FooterBackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 600px;
  width: 100%;
  background: #fff379;
`

const HeadlineBackgroundStyled = styled.div`
  position: absolute;
  background: #232323;
  width: 200px;
  height: 42px;
  z-index: -1;
  left: -80px;
  top: 40px;
`

const DescriptionAndPriceStyled = styled.div`
  display: flex;
  align-items: flex-end;
`

const PriceStyled = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 4rem;
  margin-left: 120px;
`
