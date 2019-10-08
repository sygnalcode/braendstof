import React from 'react'
import styled from 'styled-components/macro'
import snacks from './snacks.json'
import tags from './tags.json'

export default function SnackFooter() {
  const currentSnackImage =
    'https://res.cloudinary.com/sygnal/image/upload/v1570469931/braendstof/eat-performance-Cashew-Kirsce_f5337a.png'
  const currentSnack = snacks.filter(
    snack => snack.picture === currentSnackImage
  )[0]
  const showBrand = currentSnack.brand
  const showFlavor = currentSnack.flavor
  const showDescription = currentSnack.description
  const showPrice = currentSnack.price.toFixed(2)

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
        <h1>{showBrand}</h1>
        <h2>{showFlavor}</h2>
        <TagListStyled>{showTags()}</TagListStyled>
        <DescriptionAndPriceStyled>
          <p>{showDescription}</p>
          <PriceStyled>€&nbsp;{showPrice}</PriceStyled>
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

const DescriptionAndPriceStyled = styled.div`
  display: flex;
  align-items: flex-end;
`

const PriceStyled = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 4rem;
`
