import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Nav = styled.nav`
  display: Flex;
  align-items: center;
  height: 100%;
  width: 100%;
  & LoginButton{
    margin-left: 10px;
    margin-right: 10px;
  }
  & input {
     width: 200px;
     height: 100%;
     padding: 10px;
     align-items: center;
     margin-left: 10px;
     margin-right: 10px;
    
    }
  & li{
  display: flex;
  margin-left: auto;
  gap:12px;
  
  & p{ 
    &:hover{
      opacity:0.7;
      transform:scale(0.98)
           
    }

  }
`;
export const Logo = styled.img`
  margin-left: 10px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  
  }
`;
export const Image = styled.img`
  width: 40%;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin:30px 100px;
    width: 70%;
    height: 100%;
`;
