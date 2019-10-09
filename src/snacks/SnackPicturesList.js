import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import SnackPicture from './SnackPicture'

export default function SnackPicturesList({ snacksData, setScrollYPosition }) {
  function handleScroll() {
    setScrollYPosition(window.pageYOffset)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // todo: Listener auf main o.ä.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ScrollGridStyled>
      <div></div>
      <PictureListStyled>
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
