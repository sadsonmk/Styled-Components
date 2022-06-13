import React from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import { Logo } from './styles/Header.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo src='./images/logo.svg' alt='logo' />

        <Flex>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
          </ul>
          <ul>
            <li>Partners</li>
            <li>Sponsors</li>
            <li>Suppliers</li>
          </ul>
          <ul>
            <li>Testimonials</li>
            <li>Interviews</li>
            <li>Referrals</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy;2021 VB. All rights reserved.</p>


      </Container>


    </StyledFooter>
  )
}

export default Footer