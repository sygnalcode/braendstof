import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function UserBooking() {
  const [bookedSnacks, setBookedSnacks] = useState(0)
  return (
    <BackgroundStyled>
      <ContentGridStyled>
        <Item>
          <ToplineStyled>Anzahl der Snacks</ToplineStyled>
        </Item>
        <Item>
          <ToplineStyled>Betrag</ToplineStyled>
        </Item>
        <Item>
          <NumberStyled>1</NumberStyled>
          <NumberStyled>2</NumberStyled>
          <NumberStyled>3</NumberStyled>
          <NumberStyled>4</NumberStyled>
          <NumberStyled>5</NumberStyled>
        </Item>
        <Item>
          <PriceStyled>€&nbsp;{bookedSnacks.toFixed(2)}</PriceStyled>
        </Item>
        <Item>
          <NumberStyled>6</NumberStyled>
          <NumberStyled>7</NumberStyled>
          <NumberStyled>8</NumberStyled>
          <NumberStyled>9</NumberStyled>
          <NumberStyled>10</NumberStyled>
        </Item>
        <Item>
          <BuyBtn>Kaufen</BuyBtn>
        </Item>
      </ContentGridStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  position: fixed;
  bottom: 0;
  height: 240px;
  width: 100%;
  background: #fff379;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
`

const ContentGridStyled = styled.section`
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 30px 75px 85px;
  position: relative;
  margin: 16px 32px 0 32px;
`
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  /* border: 1px solid red; */
`

const ToplineStyled = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
`

const NumberStyled = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  padding-top: 11px;
  margin-right: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(35, 35, 35);
  border: 2px solid rgb(35, 35, 35);
  & :active {
    background-color: black;
    color: white;
  }
`

const PriceStyled = styled.div`
  position: absolute;
  right: 0px;
  font-weight: bold;
  font-size: 3.3rem;
`
const BuyBtn = styled.button`
  position: absolute;
  right: 0px;
  width: 150px;
  height: 60px;
  background-color: black;
  color: white;
  border-radius: 30px;
  border: 0;
  font-size: 1.5rem;
`
