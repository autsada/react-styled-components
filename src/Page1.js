import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const Button = styled.button`
  background: ${props => (props.danger ? props.theme.red : props.theme.blue)};
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  display: block;
  margin-bottom: 1rem;

  &:hover {
    background: ${props =>
      props.danger ? props.theme.orange : props.theme.green};
  }
`

const SpecialButton = styled(Button)`
  background: ${props => props.theme.teal};
  border-radius: 4px;
`

function Page1() {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <>
      <Button>Normal Button</Button>
      <Button danger>Danger Button</Button>
      <SpecialButton>Special Button</SpecialButton>
      <p
        style={{
          color: `${theme.teal}`
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        quasi quibusdam recusandae doloremque, autem eos molestias asperiores
        similique atque laborum mollitia quod? Veniam excepturi quidem beatae,
        minima est natus esse!
      </p>
    </>
  )
}

export default Page1
