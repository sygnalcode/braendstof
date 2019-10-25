import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserProfile({ data }) {
  const [activeUser, setActiveUser] = useState(undefined)

  function handleUserClick(id) {
    setActiveUser(id)
  }

  return (
    <BackgroundStyled
      active={data.id === activeUser}
      onClick={() => handleUserClick(data.id)}
    >
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
  width: 240px;
  height: 240px;
  padding: 10px;
  margin-top: 7px;
  border-radius: 40px;
  background: ${props =>
    props.active ? 'rgba(255, 243, 121, 1)' : 'transparent'};
`

const PictureStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff379;
  margin: 20px auto;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${props => props.data.picture});
`
const FirstNameStyled = styled.p`
  color: ${props =>
    props.active ? 'rgba(35, 35, 35, 1)' : 'rgba(255, 243, 121, 1)'};
  text-align: center;
`
const LastNameStyled = styled.p`
  color: ${props => (props.active ? 'rgba(35, 35, 35, 1)' : 'white')};
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`
