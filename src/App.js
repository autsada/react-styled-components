import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Page1 from './Page1'
import Page2 from './Page2'

const theme = {
  teal: '#00796B',
  green: '#388E3C',
  black: '#212121',
  orange: '#FF5722',
  red: '#D32F2F',
  blue: '#536DFE',
  lightBlue: '#1976D2',
  smallScreen: '(max-width: 600px)'
}

const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-size: 10px;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-family: 'Roboto';
      font-weight: 400;
      color: ${props => props.theme.black};
   }

   button {
    font-family: 'Roboto';
   }
`

const PageDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 0;
`

const Div = styled.div`
  margin: 2rem 0;
`

const StyledLink = styled(Link)`
  margin: 1rem;
  text-decoration: none;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PageDiv>
          <GlobalStyles />
          <Div>
            <StyledLink to='/'>Page1</StyledLink>
            <StyledLink to='/page2'>Page2</StyledLink>
          </Div>

          <Switch>
            <Route exact path='/' component={Page1} />
            <Route path='/page2' component={Page2} />
          </Switch>
        </PageDiv>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
