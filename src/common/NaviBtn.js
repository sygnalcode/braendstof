import React from 'react'
import styled from 'styled-components/macro'
import { ChevronLeft } from 'styled-icons/boxicons-regular/ChevronLeft'
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'

export default function NaviBtn({ text, icon, className }) {
  return (
    <BtnStyled className={className}>
      {text}
      {checkIcon(icon)}
    </BtnStyled>
  )

  function checkIcon(icon) {
    if (icon === 'ChevronRight') return <ChevronRight size="40" />
    else if (icon === 'ChevronLeft') return <ChevronLeft size="40" />
    else console.log('Missing icon!')
  }
}

const BtnStyled = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: rgb(255, 243, 121);
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
  display: inline-block;
  text-align: right;
  padding-right: 10px;
  padding-top: 6px;
  font-size: 1.5rem;
  letter-spacing: 0.02rem;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3), 0 0 0 2pt white;
  }
  :active {
    color: white;
    background-color: rgba(35, 35, 35, 1);
  }
`
