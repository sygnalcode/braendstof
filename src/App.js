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