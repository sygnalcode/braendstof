import React from 'react'
import styled from 'styled-components/macro'
import snacks from './snacks.json'

export default function SnackFooter() {
  const currentSnackImage = 'snack012'
  const currentSnack = snacks.filter(
    snack => snack.picture === currentSnackImage
  )[0]
  const showBrand = currentSnack.brand
  const showFlavor = currentSnack.flavor
  const showDescription = currentSnack.description
  const showPrice = currentSnack.price.toFixed(2)

  function showTags() {
    let tagKeys = []
    for (const [key, value] of Object.entries(currentSnack.tags)) {
      value
        ? (tagKeys = [...tagKeys, <li style={{ color: '#4D4600' }}>{key}</li>])
        : (tagKeys = [...tagKeys, <li style={{ color: '#DDCF3C' }}>{key}</li>])
    }
    return tagKeys
  }

  return (
    <StyledFooter>
      <h1>{showBrand}</h1>
      <h2>{showFlavor}</h2>
      <StyledList>{showTags()}</StyledList>
      <p>{showDescription}</p>
      <StyledPrice>€ {showPrice}</StyledPrice>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 600px;
  width: 100%;
  background: #fff379;
  /* padding-left: 80px;
  padding-right: 80px; */
  /* display: grid; */
  padding: 20px 80px;
`

// const StyledHeadlineBackground = styled.div`
//   position: absolute;
//   background: #232323;
//   width: 500px;
//   height: 60px;
//   z-index: -1;
//   left: -80px;
//   top: 30px;
// `

const StyledList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  & li {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-right: 24px;
    font-weight: bold;
    color: #4d4600;
  }
`

const StyledPrice = styled.div`
  font-weight: bold;
  font-size: 4rem;
`
