import React, { useState } from 'react'
import styled from 'styled-components/macro'
import UserProfile from './UserProfile'
import UserBooking from './UserBooking'

export default function UserPage({ userData }) {
  const [activeUser, setActiveUser] = useState(null)

  function handleClick(userId) {
    activeUser === userId ? setActiveUser(null) : setActiveUser(userId)
  }

  return (
    <>
      <GridStyled>
        {userData.map(singleUserData => {
          return (
            <UserProfile
              active={singleUserData._id === activeUser}
              onClick={() => handleClick(singleUserData._id)}
              data={singleUserData}
              key={singleUserData._id}
            />
          )
        })}
      </GridStyled>
      <UserBooking activeUser={activeUser} setActiveUser={setActiveUser} />
    </>
  )
}

const GridStyled = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-self: flex-start;
  margin-top: 90px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 270px;
`
