import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserProfile({ userData }) {
  const [currentUser, setCurrentUser] = useState(userData[0])

  // prevent console warning
  currentUser === null && setCurrentUser(userData[0])

  return (
    <>
      <PictureStyled currentUser={currentUser}>&nbsp;</PictureStyled>
      <FirstNameStyled>{currentUser.firstname}</FirstNameStyled>
      <LastNameStyled>{currentUser.lastname}</LastNameStyled>
    </>
  )
}

const PictureStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: white;
  background-color: yellow;
  margin: 0 auto;
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
  color: pink;
  text-align: center;
`
