import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  margin-top:100px;
  justify-content:center;
  & h4 {
     font-size:45px;
  }
  & p {
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    & h4 {
      font-size:30px;
   }
   & p {
    font-size:17px;
   }
   
  }
`;
