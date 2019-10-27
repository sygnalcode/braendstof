import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { patchUser, getSingleUser } from './usersDataServices'

const price = 1.5

export default function UserBooking({ activeUser }) {
  const [snackSum, setSnackSum] = useState(price)
  const [activeBtn, setActiveBtn] = useState(1)

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
          <NumberStyled
            active={activeBtn === 1}
            onClick={() => handleNumberClick(1)}
          >
            1
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 2}
            onClick={() => handleNumberClick(2)}
          >
            2
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 3}
            onClick={() => handleNumberClick(3)}
          >
            3
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 4}
            onClick={() => handleNumberClick(4)}
          >
            4
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 5}
            onClick={() => handleNumberClick(5)}
          >
            5
          </NumberStyled>
        </Item>
        <Item>
          <PriceStyled>€&nbsp;{snackSum.toFixed(2)}</PriceStyled>
        </Item>
        <Item>
          <NumberStyled
            active={activeBtn === 6}
            onClick={() => handleNumberClick(6)}
          >
            6
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 7}
            onClick={() => handleNumberClick(7)}
          >
            7
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 8}
            onClick={() => handleNumberClick(8)}
          >
            8
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 9}
            onClick={() => handleNumberClick(9)}
          >
            9
          </NumberStyled>
          <NumberStyled
            active={activeBtn === 10}
            onClick={() => handleNumberClick(10)}
          >
            10
          </NumberStyled>
        </Item>
        <Item>
          <BuyBtnStyled onClick={handleBuyClick} disabled={!activeUser}>
            Kaufen
          </BuyBtnStyled>
        </Item>
      </ContentGridStyled>
    </BackgroundStyled>
  )

  function handleNumberClick(number) {
    setActiveBtn(number)
    setSnackSum(number * price)
  }

  async function handleBuyClick() {
    const { balance } = await getSingleUser(activeUser)
    patchUser(activeUser, { balance: balance + snackSum })
  }
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
  grid-template-columns: auto 170px;
  grid-template-rows: 40px 75px 85px;
  position: relative;
  margin: 16px 32px 0 32px;
`
const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
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
  color: ${props => (props.active ? 'white' : 'rgb(35, 35, 35)')};
  border: 2px solid rgb(35, 35, 35);
  background: ${props => (props.active ? 'rgb(35, 35, 35)' : 'transparent')};
  cursor: pointer;
`

const PriceStyled = styled.div`
  position: absolute;
  right: 0px;
  font-weight: bold;
  font-size: 3.3rem;
  color: rgba(35, 35, 35, 1);
`
const BuyBtnStyled = styled.button`
  position: absolute;
  right: 0px;
  width: 160px;
  height: 60px;
  background-color: rgba(35, 35, 35, 1);
  /* ${({ activeUser }) => (activeUser ? '0' : '-100%')} */
  color: white;
  letter-spacing: 0.02rem;
  border-radius: 30px;
  border: 2px solid rgba(35, 35, 35, 1);
  font-size: 1.5rem;
  cursor: pointer;
  :disabled {
    background-color: transparent;
    border: 2px solid #ddcf3c;
    color: #ddcf3c;
    cursor: default;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2pt white;
  }
  :active {
    color: rgba(35, 35, 35, 1);
    background-color: rgb(255, 243, 121);
  }
`
