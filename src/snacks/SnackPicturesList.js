import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import SnackPicture from './SnackPicture'
import PropTypes from 'prop-types'
import Sunbeams from '../img/sonnenstrahlen.png'

SnackPicturesList.propTypes = {
  setScrollYPosition: PropTypes.func.isRequired,
  snacksData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default function SnackPicturesList({ snacksData, setScrollYPosition }) {
  useEffect(() => {
    function handleScroll() {
      setScrollYPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll) // todo: Listener auf main o.ä.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <SpacerGridStyled>
      <div></div>
      <SunbeamsStyled src={Sunbeams} alt="" />
      <PictureListStyled>
        {snacksData.map((singleSnackData, index) => {
          return <SnackPicture data={singleSnackData} key={index} />
        })}
      </PictureListStyled>
      <div></div>
    </SpacerGridStyled>
  )
}

const SpacerGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 220px auto 600px;
`

const SunbeamsStyled = styled.img`
  position: fixed;
  top: 260px;
  width: 100%;
`

const PictureListStyled = styled.section`
  overflow: scroll;
`
