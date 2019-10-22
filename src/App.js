import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import SnackPicturesList from './snacks/SnackPicturesList'
import SnackInfos from './snacks/SnackInfos'
import originalSnacksData from './snacks/snacks.json'

export default function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [snacksData, setSnacksData] = useState(originalSnacksData)

  // prevent console warning
  snacksData === null && setSnacksData(originalSnacksData)

  return (
    <PageStyled>
      <Navigation />
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
