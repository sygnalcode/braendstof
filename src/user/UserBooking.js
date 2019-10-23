import React from 'react'
import styled from 'styled-components/macro'

export default function UserBooking() {
  return (
    <BackgroundStyled>
      <ContentStyled>Hallo</ContentStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 240px;
  width: 100%;
  background: #fff379;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
`

const ContentStyled = styled.section`
  display: grid;
  margin: 1rem 2rem 0 2rem;
`
