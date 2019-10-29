import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'

export default function Modal({ isOpen, hide, snackSum, onHandleBuyClick }) {
  return isOpen
    ? ReactDOM.createPortal(
        <>
          <OverlayStyled />
          <ModalWrapperStyled tabIndex={-1}>
            <ModalStyled>
              <ModalHeaderStyled>
                <ModalCloseButtonStyled type="button" onClick={hide}>
                  <span>&times;</span>
                </ModalCloseButtonStyled>
              </ModalHeaderStyled>
              <p>Snacks kaufen für:</p>
              <SnackPriceStyled>
                &euro;&nbsp;{snackSum.toFixed(2)}
              </SnackPriceStyled>
              <CloseBtnStyled type="button" onClick={hide}>
                <span>Abbrechen</span>
              </CloseBtnStyled>
              <BuyBtnStyled onClick={onHandleBuyClick}>Kaufen</BuyBtnStyled>
            </ModalStyled>
          </ModalWrapperStyled>
        </>,
        document.body
      )
    : null
}

const SnackPriceStyled = styled.p`
  font-size: 3rem;
  text-align: center;
  background-color: white;
  width: 100%;
  height: 80px;
  padding-top: 30px;
  margin-top: 20px;
`

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

const ModalWrapperStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const ModalStyled = styled.div`
  z-index: 100;
  background: rgb(255, 243, 121);
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -125px;
  margin-left: -250px;
  border-radius: 45px;
  padding: 32px;
  height: 300px;
  width: 500px;
`

const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`

const ModalCloseButtonStyled = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1rem;
  color: rgba(35, 35, 35, 1);
  background-color: transparent;
  cursor: pointer;
  border: none;
`

const CloseBtnStyled = styled.button`
  position: absolute;
  left: 32px;
  bottom: 32px;
  width: 160px;
  height: 60px;
  background-color: transparent;
  color: rgba(35, 35, 35, 1);
  letter-spacing: 0.02rem;
  border-radius: 30px;
  border: 2px solid rgba(35, 35, 35, 1);
  font-size: 1.5rem;
  cursor: pointer;
  :focus {
    outline: none;
    box-shadow: 0 0 0 2pt white;
  }
  :active {
    color: rgb(255, 243, 121);
    background-color: rgba(35, 35, 35, 1);
    box-shadow: 0 0 0 2pt white;
  }
`

const BuyBtnStyled = styled.button`
  position: absolute;
  right: 32px;
  bottom: 32px;
  width: 160px;
  height: 60px;
  background-color: rgba(35, 35, 35, 1);
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
    box-shadow: 0 0 0 2pt white;
  }
`
