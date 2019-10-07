import React from 'react'
import styled from 'styled-components/macro'
// import snacks from './snacks.json'
import Snack from './Snack'

export default function SnackList({ snacksData }) {
  return (
    <PictureListStyled>
      {snacksData.map((singleSnackData, index) => {
        return <Snack data={singleSnackData} key={index} />
      })}
    </PictureListStyled>
  )
}

// const [mainScroll, setMainScroll] = useState()

// useEffect(() => {
//   window.addEventListener('scroll', () => console.log('test'))
// }, [])
//

//
//
// let scrollPosition = 600
// let ticking = false
// function showSnack(scrollPosition) {
//   console.log(scrollPosition)
//   if (scrollPosition <= 200) {
//     console.log('Snack 1')
//   } else if (scrollPosition <= 500) {
//     console.log('Snack 2')
//   } else {
//     console.log('Snack 3')
//   }
// }
// window.addEventListener('scroll', e => {
//   scrollPosition = window.scrollY
//   // console.log(e)
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       showSnack(scrollPosition)
//       ticking = false
//     })
//     ticking = true
//   }
// })
//
//

// function GetScrollHeight() {
//   // let snacksHeight = snacks.map(snack => snacksHeight += snack.pictureheight)
//   // console.log(snacksHeight)
//   // const currentSnackImage = 'snack012'
//   // const currentSnack = snacks.filter(
//   //   snack => snack.picture === currentSnackImage
//   // )[0]
//   // const snackPictureHeight = currentSnack.pictureheight
//   let heightArray = []
// }

// let scrollPosition = 0
// let ticking = false
// function handleScroll(scrollPosition) {
//   // console.log(scrollPosition)
//   // let totalScrollHeight = 600 + snacks.map(snack => totalScrollHeight += snack.pictureheight)
//   const currentSnackImage = 'snack012'
//   const currentSnack = snacks.filter(
//     snack => snack.picture === currentSnackImage
//   )[0]
//   const snackPictureHeight = currentSnack.pictureheight
//   if (scrollPosition <= 200) {
//     console.log('Snack 1')
//   } else if (scrollPosition <= 500) {
//     console.log('Snack 2')
//   } else {
//     console.log('Snack 3')
//   }
// }
// window.addEventListener('scroll', e => {
//   scrollPosition = window.scrollY
//   // console.log(e)
//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       handleScroll(scrollPosition)
//       ticking = false
//     })
//     ticking = true
//   }
// })

//
//
// // Original
// function ScrollingElement() {
//   const [scrollPosition, setScrollPosition] = useState(0)

//   function logit() {
//     setScrollPosition(window.pageYOffset)
//   }

//   useEffect(() => {
//     function watchScroll() {
//       window.addEventListener('scroll', logit)
//     }
//     watchScroll()
//     return () => window.removeEventListener('scroll', logit)
//   })
//   return <div>Scroll position: {scrollPosition}px</div>
// }

//
//
// das Scroll-Ende finden und etwas ausführen
// function handleScroll(el) {
//   let element = el.target
//   // console.log(element)

//   if (element.scrollHeight - element.scrollTop === element.clientHeight) {
//     // do something at end of scroll
//     // console.log(element.scrollHeight) // 3160 / 6160
//     // console.log(element.scrollTop) // 1240 / 4240
//     // console.log(element.clientHeight) // 1920 / 1920
//     console.log('ich wurde gescrollt')
//     // console.log(element)
//   }
// }

const PictureListStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  gap: 80px;
  overflow: scroll;
  height: 100vh;
  /* background: orange; */
  padding-top: 600px;
  /* padding-bottom: 1150px; */
`
