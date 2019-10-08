import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import SnackPicture from './SnackPicture'

export default function SnackPicturesList({ snacksData }) {
  function GetScrollYOffset() {
    const [scrollYPosition, setScrollYPosition] = useState(0)

    useEffect(() => {
      window.addEventListener('scroll', () =>
        setScrollYPosition(window.pageYOffset)
      )
      return () =>
        window.removeEventListener('scroll', () =>
          setScrollYPosition(window.pageYOffset)
        )
    })
    return <div>Position: {scrollYPosition}</div>
  }

  return (
    <ScrollGridStyled>
      <div></div>
      <PictureListStyled>
        <GetScrollYOffset />
        {snacksData.map((singleSnackData, index) => {
          return <SnackPicture data={singleSnackData} key={index} />
        })}
      </PictureListStyled>
      <div></div>
    </ScrollGridStyled>
  )
}

const ScrollGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 454px auto 1150px;
  /* todo: Höhen der rows finetunen */
`

const PictureListStyled = styled.section`
  display: grid;
  justify-items: center;
  gap: 80px;
  overflow: scroll;
`
