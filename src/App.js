import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SnackList from './snacks/SnackList'
import SnackFooter from './snacks/SnackFooter'
import originalSnacksData from './snacks/snacks.json'

export default function App() {
  const [snacksData, setSnacksData] = useState(originalSnacksData)

  return (
    <PageStyled>
      <SnackList snacksData={snacksData}/>
      <SnackFooter />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`
