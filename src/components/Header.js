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
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <FlexContainer>
            <h1>Be our guest at our company</h1><br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam recusandae aut voluptatibus iure qui eaque nam nemo totam provident est ratione modi eos perspiciatis harum doloribus incidunt, dolore minima.</p><br /><br />


            <Button bg='#ff0099' color='#fff' >Get started for free</Button>

          </FlexContainer>
          <Image src="./images/comp.svg" />



        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header