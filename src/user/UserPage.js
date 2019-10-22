import React from 'react'
import UserProfile from './UserProfile'

export default function UserPage({ userData }) {
  return (
    <>
      <h1>hallo, ich bin die User page</h1>
      <UserProfile userData={userData} />
    </>
  )
}
