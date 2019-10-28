import React from 'react'
import styled from 'styled-components/macro'
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'

export default function NaviBtn({ text, icon = '', className }) {
  return (
    <BtnStyled className={className}>
      {text}
      {checkIcon(icon)}
    </BtnStyled>
  )

  function checkIcon(icon) {
    if (icon === 'ChevronRight') return <ChevronRightStyled size="40" />
    else if (icon === 'ChevronLeft') return <ChevronLeftStyled size="40" />
    else return null
  }
}

const BtnStyled = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: rgb(255, 243, 121);
  border: 2px solid rgba(35, 35, 35, 1);
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.5);
  display: inline-block;
  text-align: right;
  padding-right: 47px;
  padding-top: 2px;
  font-size: 1.5rem;
  letter-spacing: 0.01rem;
  cursor: pointer;
  :focus {
    outline: none;
    border: 2px solid white;
  }
  :active {
    color: white;
    background-color: rgba(35, 35, 35, 1);
    border: 2px solid white;
  }
`

const ChevronRightStyled = styled(ChevronRight)`
  position: absolute;
  top: 9px;
  right: 7px;
`

const ChevronLeftStyled = styled(ChevronLeft)`
  position: absolute;
  top: 9px;
  left: 7px;
`
