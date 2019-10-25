import React from 'react'
import styled from 'styled-components/macro'
import UserProfile from './UserProfile'
import UserBooking from './UserBooking'

export default function UserPage({ userData }) {
  return (
    <>
      <GridStyled>
        {userData.map((singleUserData, index) => {
          return <UserProfile data={singleUserData} key={index} />
        })}
      </GridStyled>
      <UserBooking />
    </>
  )
}

const GridStyled = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-self: flex-start;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 270px;
`
