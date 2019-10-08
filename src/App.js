import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SnackPicturesList from './snacks/SnackPicturesList'
import SnackInfos from './snacks/SnackInfos'
import originalSnacksData from './snacks/snacks.json'

export default function App() {
  const [snacksData, setSnacksData] = useState(originalSnacksData)

  return (
    <PageStyled>
      <SnackPicturesList snacksData={snacksData} />
      <SnackInfos snacksData={snacksData} />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`
