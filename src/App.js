import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import SnackPage from './snacks/SnackPage'
import UserPage from './users/UserPage'
import { getUsers } from './users/usersDataServices'
import { getSnacks } from './snacks/snacksDataServices'

export default function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [userData, setUserData] = useState([])
  const [snacksData, setSnacksData] = useState([])
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    getUsers().then(userData => {
      userData.sort((a, b) => a.lastname.localeCompare(b.lastname))
      setUserData(userData)
    })
  }, [])

  useEffect(() => {
    getSnacks().then(setSnacksData)
  }, [])

  return (
    <Router>
      <PageStyled>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              setCurrentPage(0)
              return <UserPage userData={userData}/>
            }}
          />
          <Route
            path="/snacks"
            render={() => {
              setCurrentPage(1)
              return (
                <SnackPage
                  snacksData={snacksData}
                  setScrollYPosition={setScrollYPosition}
                  scrollYPosition={scrollYPosition}
                />
              )
            }}
          />
        </Switch>
        <Navigation currentPageState={[currentPage, setCurrentPage]} />
      </PageStyled>
    </Router>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`
