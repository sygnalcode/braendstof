import React from 'react'
import styled from 'styled-components/macro'
import SnackTags from './SnackTags'
// import snacks from './snacks.json'

export default function SnackInfos({ snacksData }) {
  let currentSnack = snacksData[0]
  // console.log(currentSnack)

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
  padding-top: 40px; /* todo: Finetuning wenn H1 BG separiert */
`

const FooterBackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 600px;
  width: 100%;
  background: #fff379;
`

// todo: Header BG bis an den linken Rand
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
