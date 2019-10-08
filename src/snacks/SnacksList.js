import React from 'react'
import styled from 'styled-components/macro'
import SnackPicture from './SnackPicture'

export default function SnackList({ snacksData }) {
  return (
    <PictureListStyled>
      {snacksData.map((singleSnackData, index) => {
        return <SnackPicture data={singleSnackData} key={index} />
      })}
    </PictureListStyled>
  )
}

const PictureListStyled = styled.section`
  display: grid;
  justify-items: center;
  gap: 80px;
  overflow: scroll;
  height: 100vh;
  padding-top: 600px;
  /* todo: Padding bottom o.ä. */
  /* padding-bottom: 1150px; */
`
