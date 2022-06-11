import styled from 'styled-components'


export const StyledHeader = styled.header`
  
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  
`
export const Nav = styled.nav`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;


  @media (max-width:768px){
    flex-direction: column;
  }


`
export const Logo = styled.img`
width:100px;
height:100px;

&:hover{
  cursor: pointer;
  transform:scale(1.2);

}
`
export const Image = styled.img`
  width:375px;
  margin-left: 40px;
  @media (max-width:768px){
    margin: 40px 0 30px;
  }
`