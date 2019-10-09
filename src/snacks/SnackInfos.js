import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SnackTags from './SnackTags'

export default function SnackInfos({ snacksData, scrollYPosition }) {
  const [currentSnack, setCurrentSnack] = useState(snacksData[0])
  let scrollPos = scrollYPosition
  let ticking = false
  
  function doSomething(scrollPos) {
    if (scrollPos < currentSnack.pictureheight) {
      console.log('kleiner')
    } else {
      // scrollYPosition = 500
      // console.log(scrollYPosition)
      scrollPos += currentSnack.pictureheight
      console.log(scrollPos)
      setCurrentSnack(snacksData[1])
    }
  }

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(scrollPos)
      ticking = false
    })
    ticking = true
  }

  // scrollYPosition < currentSnack.pictureheight
  //   ? console.log('kleiner')
  //   // : setCurrentSnack(() => currentSnack[5])
  //   : setCurrentSnack(snacksData[1])

  return (
    <FooterBackgroundStyled>
      <FooterContentStyled>
        <HeadlineBackgroundStyled />
        <h1>{currentSnack.brand}</h1>
        <h2>{currentSnack.flavor}</h2>
        <SnackTags />
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
`
