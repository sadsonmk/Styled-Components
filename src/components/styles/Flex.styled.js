import styled from 'styled-components'


export const Flex = styled.div`
display:flex;
align-items: center;

& > div, & > ul{
flex: 1;
}

@media (max-width: 768px){
  flex-direction: column;
  align-items: center;
}

`
export const FlexContainer = styled.div`
@media (max-width:768px){
  display: flex ;
  flex-direction: column;
  align-items: center;
justify-content: center
}
`