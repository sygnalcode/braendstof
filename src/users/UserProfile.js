import React from 'react'
import styled from 'styled-components/macro'
import Sunbeams from '../img/sonnenstrahlen-204x150.png'

export default function UserProfile({ data, onClick, active }) {
  return (
    <BackgroundStyled onClick={onClick}>
      <SunbeamsStyled src={Sunbeams} active={active} alt="Sonnenstrahlen" />
      <ActiveBoderStyled active={active} />
      <PictureStyled data={data}>&nbsp;</PictureStyled>
      <FirstNameStyled>{data.firstname}</FirstNameStyled>
      <LastNameStyled>{data.lastname}</LastNameStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  position: relative;
  width: 240px;
  height: 212px;
  padding: 10px;
  margin-top: 7px;
  background: transparent;
`
const SunbeamsStyled = styled.img`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;
  top: 10px;
  left: 17px;
`

const ActiveBoderStyled = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  margin-top: 10px;
  left: 50%;
  margin-left: -65px;
  border-radius: 50%;
  border: ${props =>
    props.active
      ? '4px solid rgba(255, 243, 121, 1)'
      : '2px solid rgba(255, 243, 121, 1)'};
  cursor: pointer;
`

const PictureStyled = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 20px auto;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${props => props.data.picture});
`

const FirstNameStyled = styled.p`
  color: rgba(255, 243, 121, 1);
  text-align: center;
`
const LastNameStyled = styled.p`
  color: white;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`
