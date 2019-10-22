import React from 'react'
import styled from 'styled-components/macro'
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft'

export default function Navigation() {
  return (
    <DotStyled>
      <ChevronLeft size="40" title="Unlock account" />
    </DotStyled>
  )
}

const DotStyled = styled.div`
  height: 60px;
  width: 60px;
  background-color: #fff379;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  top: 2rem;
  left: 2rem;
  text-align: center;
  padding-top: 11px;
  font-size: 1.5rem;
  z-index: 20;
`
