import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import NaviBtn from './NaviBtn'

export default function Navigation({ currentPageState }) {
  const [currentPage, setCurrentPage] = currentPageState

  return (
    <>
      {currentPage === 0 ? (
        <NavLink to="/snacks" onClick={() => setCurrentPage(1)}>
          <SnacksBtnStyled text={'Snacks'} icon={'ChevronRight'} />
        </NavLink>
      ) : (
        <NavLink to="/" onClick={() => setCurrentPage(0)}>
          <BackBtnStyled text={''} icon={'ChevronLeft'} />
        </NavLink>
      )}
    </>
  )
}

const SnacksBtnStyled = styled(NaviBtn)`
  position: fixed;
  top: 32px;
  right: 32px;
  width: 155px;
  z-index: 20;
`

const BackBtnStyled = styled(NaviBtn)`
  position: fixed;
  top: 32px;
  left: 32px;
  height: 60px;
  width: 60px;
  z-index: 20;
`
