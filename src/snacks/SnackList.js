import React from 'react'
import styled from 'styled-components/macro'
import Snack from './Snack'

export default function SnackList({ snacksData }) {
  return (
    <PictureListStyled>
      {snacksData.map((singleSnackData, index) => {
        return <Snack data={singleSnackData} key={index} />
      })}
    </PictureListStyled>
  )
}

const PictureListStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  gap: 80px;
  overflow: scroll;
  height: 100vh;
  padding-top: 600px;
  /* padding-bottom: 1150px; */
`
