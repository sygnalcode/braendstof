import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <>
      {currentPage === 0 ? (
        <NavLink to="/snacks" onClick={() => setCurrentPage(1)}>
          <DotStyledRight>
            Snacks
            <ChevronRight size="40" title="Snacks page" />
          </DotStyledRight>
        </NavLink>
      ) : (
        <NavLink to="/" onClick={() => setCurrentPage(0)}>
          <DotStyledLeft>
            <ChevronLeft size="40" title="User page" />
          </DotStyledLeft>
        </NavLink>
      )}
    </>
  )
}

const DotStyledRight = styled.div`
  height: 60px;
  width: 160px;
  background-color: #fff379;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  display: inline-block;
  position: fixed;
  text-align: center;
  padding-top: 11px;
  font-size: 1.5rem;
  z-index: 20;
  top: 2rem;
  right: 2rem;
`

const DotStyledLeft = styled.div`
  height: 60px;
  width: 60px;
  background-color: #fff379;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  text-align: center;
  padding-top: 11px;
  font-size: 1.5rem;
  z-index: 20;
  top: 2rem;
  left: 2rem;
`
