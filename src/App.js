import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SnackPicturesList from './snacks/SnackPicturesList'
import SnackInfos from './snacks/SnackInfos'
import originalSnacksData from './snacks/snacks.json'

export default function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [snacksData, setSnacksData] = useState(originalSnacksData)

  return (
    <PageStyled>
      {/* <CheckLine /> */}
      <SnackPicturesList
        snacksData={snacksData}
        setScrollYPosition={setScrollYPosition}
      />
      <SnackInfos snacksData={snacksData} scrollYPosition={scrollYPosition} />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`

// const CheckLine = styled.hr`
//   position: fixed;
//   top: 654px;
//   border: 2px solid red;
//   width: 100%;
// `
