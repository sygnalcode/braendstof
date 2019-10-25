import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './common/Navigation'
import SnackPage from './snacks/SnackPage'
import UserPage from './user/UserPage'
import { getUser } from './user/UserDataServices'
import { getSnacks } from './snacks/SnacksDataServices'
// import originalSnacksData from './snacks/snacks.json'
// import originalUserData from './user/user.json'

export default function App() {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  // const [snacksData, setSnacksData] = useState(originalSnacksData)
  // const [userData, setUserData] = useState(originalUserData)
  const [userData, setUserData] = useState([])
  const [snacksData, setSnacksData] = useState([])

  // prevent console warning
  // snacksData === null && setSnacksData(originalSnacksData)
  // userData === null && setUserData(originalSnacksData)

  useEffect(() => {
    getUser().then(setUserData)
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
            render={() => <UserPage userData={userData} />}
          />
          <Route
            path="/snacks"
            render={() => (
              <SnackPage
                snacksData={snacksData}
                setScrollYPosition={setScrollYPosition}
                scrollYPosition={scrollYPosition}
              />
            )}
          />
        </Switch>
        <Navigation />
      </PageStyled>
    </Router>
  )
}

const PageStyled = styled.main`
  position: relative;
  overflow: hidden;
`
