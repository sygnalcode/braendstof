import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserProfile({ data }) {
  const [activeUser, setActiveUser] = useState(undefined)

  function handleUserClick(id) {
    data.id === activeUser ? setActiveUser(undefined) : setActiveUser(id)
  }

  return (
    <BackgroundStyled
      active={data.id === activeUser}
      onClick={() => handleUserClick(data.id)}
    >
      <ActiveBoderStyled
        active={data.id === activeUser}
        onClick={() => handleUserClick(data.id)}
      />
      <PictureStyled
        active={data.id === activeUser}
        data={data}
        onClick={() => handleUserClick(data.id)}
      >
        &nbsp;
      </PictureStyled>
      <FirstNameStyled
        active={data.id === activeUser}
        onClick={() => handleUserClick(data.id)}
      >
        {data.firstname}
      </FirstNameStyled>
      <LastNameStyled
        active={data.id === activeUser}
        onClick={() => handleUserClick(data.id)}
      >
        {data.lastname}
      </LastNameStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  padding: 10px;
  margin-top: 7px;
  /* border-radius: 40px; */
  background: transparent;
`

const ActiveBoderStyled = styled.div`
  position: absolute;
  width: 130px;
  height: 130px;
  margin-top: 10px;
  left: 50%;
  margin-left: -65px;
  border-radius: 50%;
  /* background: ${props =>
    props.active ? 'rgba(255, 243, 121, 1)' : 'transparent'}; */
  /* border: 2px solid rgba(255, 243, 121, 1); */
  border: ${props =>
    props.active
      ? '5px solid rgba(255, 243, 121, 1)'
      : '2px solid rgba(255, 243, 121, 1)'};
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
  /* -webkit-filter: ${props =>
    props.active ? 'grayscale(.2) opacity(.8)' : 'grayscale(0) opacity(1)'};
  filter: ${props =>
    props.active ? 'grayscale(1) opacity(.9)' : 'grayscale(0) opacity(1)'}; */
`

const FirstNameStyled = styled.p`
  /* color: ${props =>
    props.active ? 'rgba(35, 35, 35, 1)' : 'rgba(255, 243, 121, 1)'}; */
    color: rgba(255, 243, 121, 1);
  text-align: center;
`
const LastNameStyled = styled.p`
  /* color: ${props => (props.active ? 'rgba(35, 35, 35, 1)' : 'white')}; */
  color: white;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`
