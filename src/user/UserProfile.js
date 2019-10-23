import React from 'react'
import styled from 'styled-components/macro'

export default function UserProfile({ data }) {
  return (
    <BackgroundStyled>
      <PictureStyled data={data}>&nbsp;</PictureStyled>
      <FirstNameStyled>{data.firstname}</FirstNameStyled>
      <LastNameStyled>{data.lastname}</LastNameStyled>
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
  background-image: url(${props => props.data.picture});
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
