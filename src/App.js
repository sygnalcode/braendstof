import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SnacksList from './snacks/SnacksList'
import SnackFooter from './snacks/SnackFooter'
import originalSnacksData from './snacks/snacks.json'

export default function App() {
  const [snacksData, setSnacksData] = useState(originalSnacksData)

  return (
    <PageStyled>
      <SnacksList snacksData={snacksData} />
      <SnackFooter />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`
