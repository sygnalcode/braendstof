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
    return Object.entries(tags).map(([key, value]) => {
      return currentSnack.tags.includes(key) ? (
        <ActiveTagStyled>{value}</ActiveTagStyled>
      ) : (
        <PassiveTagStyled>{value}</PassiveTagStyled>
      )
    })
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

const FooterContentStyled = styled.section`
  display: grid;
  margin: 1rem 2rem 0 2rem;
  /* width: 1040px; */
  /* padding-top: 40px; */
`

const FooterBackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 380px;
  width: 100%;
  background: #fff379;
`

const HeadlineBackgroundStyled = styled.div`
  position: absolute;
  background: #232323;
  width: 200px;
  height: 33px;
  z-index: -1;
  left: -80px;
  top: 1rem;
`
const TagListStyled = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  & li {
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

const DescriptionAndPriceStyled = styled.div`
  display: flex;
  align-items: flex-end;
`

const PriceStyled = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 3.3rem;
  margin-left: 100px;
`
