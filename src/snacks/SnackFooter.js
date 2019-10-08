import React from 'react'
import styled from 'styled-components/macro'
import snacks from './snacks.json'
// import SnackInfos from './SnackInfos'
import SnackTags from './SnackTags'

export default function SnackFooter({ snacksData }) {
  
  const currentSnackImage =
    'https://res.cloudinary.com/sygnal/image/upload/v1570469931/braendstof/eat-performance-Cashew-Kirsce_f5337a.png'
  
    const currentSnack = snacks.filter(
    snack => snack.picture === currentSnackImage
  )[0]

//   export default function SnackList({ snacksData }) {

//     return (
//       <section>
//         {snacksData.map((singleSnackData, index) => {
//           return <Snack data={singleSnackData} key={index} />
//         })}
//       </section>
//     )
//   }

  //   return (
  //     <section>
  //       {snacksData.map((singleSnackData, index) => {
  //         return <SnackInfos data={singleSnackData} key={index} />
  //       })}
  //     </section>
  //   )
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
