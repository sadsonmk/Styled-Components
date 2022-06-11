import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'

const Footer = () => {
  return (
    <div>
      <Container>
        <img src='./images/logo.svg' alt='logo' />

        <Flex>
          <ul>
            <li>Hello</li>
            <li>How are you</li>
            <li>whats up</li>
          </ul>
          <ul>
            <li>Todii</li>
            <li>Wangu</li>
            <li>ukuita sei</li>
          </ul>
          <ul>
            <li>Please</li>
            <li>Excuse</li>
            <li>Play</li>
          </ul>

        </Flex>
        <p>&copy;2021 VB. All rights reserved.</p>

      </Container>


    </div>
  )
}

export default Footer