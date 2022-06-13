import React from 'react'
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex, FlexContainer } from './styles/Flex.styled';


const Header = () => {
  return (
    <StyledHeader >
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' />
          <Button>Let's talk</Button>
        </Nav>
        <Flex>
          <FlexContainer>
            <h1>Web Development</h1><br /><br />
            <p>Check out our services and make inquiries with us. We can deliver on your requirements. Do not hesitate to contact us, we exist because of you.</p><br /><br />


            <Button bg='#ff0099' color='#fff' >Get your quotations here</Button>

          </FlexContainer>
          <Image src="./images/comp.svg" />



        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header