import React from 'react'
import styled from 'styled-components/macro'

export default function SnackPicture({ data }) {
  return (
    <StyledDiv>
      <img src={data.picture} alt={data.brand} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  height: 300px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`
