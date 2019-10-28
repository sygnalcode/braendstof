import React, { useState, useEffect, useLayoutEffect } from 'react'
import styled from 'styled-components/macro'
import SnackTags from './SnackTags'
import PropTypes, { arrayOf } from 'prop-types'
// import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'

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
  const [currentSnack, setCurrentSnack] = useState(null)
  useLayoutEffect(() => {
    handleScrollEvent(scrollYPosition)
  })

  useEffect(() => {
    snacksData.length && setCurrentSnack(snacksData[0])
  }, [snacksData])

  function handleScrollEvent(scrollYPosition) {
    const index = Math.round(scrollYPosition / 260)
    setCurrentSnack(snacksData[index])
  }

  return currentSnack ? (
    <FooterBackgroundStyled>
      {/* <DotStyled>
        <ChevronUp size="40" title="Unlock account" />
      </DotStyled> */}
      <HeadlineBackgroundStyled />
      <h1>{currentSnack.brand}</h1>
      <FooterContentStyled>
        <h2>{currentSnack.flavor}</h2>
        <SnackTags currentSnack={currentSnack} />
        <DescriptionAndPriceStyled>
          <p>{currentSnack.description}</p>
          <PriceStyled>€&nbsp;{currentSnack.price.toFixed(2)}</PriceStyled>
        </DescriptionAndPriceStyled>
      </FooterContentStyled>
    </FooterBackgroundStyled>
  ) : (
    <></>
  )
}

const FooterContentStyled = styled.section`
  display: grid;
  margin: 1rem 2rem 0 2rem;
`

const FooterBackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 340px;
  width: 100%;
  background: #fff379;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
`

// const DotStyled = styled.div`
//   height: 60px;
//   width: 60px;
//   background-color: #fff379;
//   box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
//   border-radius: 50%;
//   display: inline-block;
//   position: fixed;
//   bottom: 310px;
//   left: 50%;
//   margin-left: -30px;
//   text-align: center;
//   padding-top: 11px;
//   font-size: 1.5rem;
// `

const HeadlineBackgroundStyled = styled.div`
  position: absolute;
  background: #232323;
  width: 200px;
  height: 33px;
  z-index: -10;
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
  color: rgba(35, 35, 35, 1);
`
