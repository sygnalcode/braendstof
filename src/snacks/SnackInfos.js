import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import SnackTags from './SnackTags'

export default function SnackInfos({ snacksData, scrollYPosition }) {
  const [currentSnack, setCurrentSnack] = useState(snacksData[0])
  //const [snackScrollPosition, setSnackScrollPosition] = useState(0)
  // const [snackTopPosition, setSnackTopPosition] = useState(0)
  // const [snackCounter, setSnackCounter] = useState(0)
  // const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const [allSnackHeights, setAllSnackHeights] = useState(snacksData.map(snack => snack.pictureheight))

  // useEffect(() => {
  //   const newSnack = snacksData[snackCounter]
  //   if (newSnack) {
  //     setCurrentSnack(newSnack)
  //   }
  // }, [snackCounter])
  // const [currentScrollPos, setCurrentScrollPos] = useState(scrollYPosition)

  // 1. Idee – Höhen ausrechnen
  // function setSrollStart() {
  //   // magic
  //   snacksData.map(snack => ({...snack + snack.pictureheight, }))
  // }

  // 2. Idee – Position aus dem DOM entnehmen
  // useEffect(_ => {
  //   snacksData.map( snack => ({...snack, position: "ausnHTML"}))
  // }, [])

  //
  // todo: Snack beim Hochscrollen rückwärts zählen
  //

  console.log(scrollYPosition)

  useEffect(() => {
//    console.log('effected')
//    handleScrollEvent(scrollYPosition)
 //   setSnackScrollPosition(scrollYPosition - setSnackTopPosition)
    handleScrollEvent(scrollYPosition)
    // setLastScrollPosition(scrollYPosition)
  }, [scrollYPosition])

  function handleScrollEvent(scrollPosition) {
    let snackCounter = 0
    let position = 0
    allSnackHeights.forEach(snackHeight => {
      position += snackHeight
      if (scrollPosition >= position && scrollPosition < (position + allSnackHeights[snackCounter + 1] + 90)) {
        console.log('POSITION', position)
        const newSnack = snacksData[snackCounter]
        if (newSnack) {
          setCurrentSnack(newSnack)
        }
      }
      snackCounter++
    })
  }

//   function handleScrollEvent(scrollPos) {
//     console.log(scrollPos)
//     console.log(snackTopPosition)
//     const snackScrollPosition = (scrollPos - (scrollPos - lastScrollPosition)) - snackTopPosition
//     console.log(snackTopPosition)
// //    console.log(snackScrollPosition)
//     if (snackScrollPosition > currentSnack.pictureheight + 20) {
//       console.log('NEXT SNACK')
// //      setSnackScrollPosition(0)
//       setSnackTopPosition(scrollPos)
//       setSnackCounter(snackCounter + 1)
//     }
// //     else if (snackScrollPosition < 0) {
// //       setSnackTopPosition(scrollPos - currentSnack.pictureheight - 20)
// // //      setSnackScrollPosition(currentSnack.pictureheight + 20)
// //     }
//   }

  function setSnackByScroll(scrollPos) {
    const currentIndex = snacksData.findIndex(
      snack => snack.id === currentSnack.id
      )
      // console.log(scrollPos)
      console.log(currentSnack)
      if (scrollPos > currentSnack.pictureheight) {
      scrollPos += currentSnack.pictureheight
      const newSnack = snacksData[currentIndex + 1]
      if (newSnack) {
        setCurrentSnack(newSnack)
      }
    }
  }

  //
  // letzter Stand
  //
  // useEffect(() => {
  //   console.log('effected')
  //   setSnackByScroll(scrollYPosition)
  // }, [scrollYPosition])

  // function setSnackByScroll(scrollPos) {
  //   const currentIndex = snacksData.findIndex(
  //     snack => snack.id === currentSnack.id
  //   )
  //   if (scrollPos > currentSnack.pictureheight) {
  //     // scrollPos += currentSnack.pictureheight
  //     const newSnack = snacksData[currentIndex + 1]
  //     if (newSnack) {
  //       setCurrentSnack(newSnack)
  //     }
  //   }
  // }

  //Idee: Start- und Endwerte errechnen aus pictureheight

  // function setSnackByScroll(scrollPos) {
  //   const currentIndex = snacksData.findIndex(
  //     snack => snack.id === currentSnack.id
  //   )
  //   if (currentScrollPos < currentSnack.pictureheight) {
  //   } else if (currentScrollPos > currentSnack.pictureheight) {
  //     currentScrollPos += currentSnack.pictureheight
  //     setCurrentSnack(snacksData[currentIndex + 1])
  //   }
  // }

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
