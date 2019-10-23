import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserProfile({ userData }) {
  const [currentUser, setCurrentUser] = useState(userData[0])

  // prevent console warning
  currentUser === null && setCurrentUser(userData[0])

  return (
    <BackgroundStyled>
      <PictureStyled currentUser={currentUser}>&nbsp;</PictureStyled>
      <FirstNameStyled>{currentUser.firstname}</FirstNameStyled>
      <LastNameStyled>{currentUser.lastname}</LastNameStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  width: 240px;
  height: 240px;
  padding: 10px;
  margin-top: 7px;
  border-radius: 40px;
  & :active {
    /* border: 2px solid #fff379; */
    background: rgba(255, 243, 121, 0.3);
  }
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
  background-image: url(${props => props.currentUser.picture});
`
const FirstNameStyled = styled.p`
  color: yellow;
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
