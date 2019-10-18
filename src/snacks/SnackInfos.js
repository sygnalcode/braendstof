import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import SnackTags from './SnackTags'
import PropTypes, { arrayOf } from 'prop-types'

SnackInfos.propTypes = {
  scrollYPosition: PropTypes.number.isRequired,
  snacksData: arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      flavor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
}

export default function SnackInfos({ snacksData, scrollYPosition }) {
  const [currentSnack, setCurrentSnack] = useState(snacksData[0])
  useEffect(() => {
    handleScrollEvent(scrollYPosition)
  })

  function handleScrollEvent(scrollPosition) {
    const index = Math.round(scrollPosition / 340)
    setCurrentSnack(snacksData[index])
  }

  return (
    <FooterBackgroundStyled>
      <FooterContentStyled>
        <HeadlineBackgroundStyled />
        <h1>{currentSnack.brand}</h1>
        <h2>{currentSnack.flavor}</h2>
        <SnackTags currentSnack={currentSnack} />
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
