import React from 'react'
import styled from 'styled-components/macro'
import SnackList from './snacks/SnackList'
import SnackFooter from './snacks/SnackFooter'

export default function App() {
  return (
    <PageStyled>
      <SnackList />
      <SnackFooter />
    </PageStyled>
  )
}

const PageStyled = styled.main`
  position: relative;
`
