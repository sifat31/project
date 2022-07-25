import styled from "styled-components";

export const Button = styled.button`
font-size: 1em;
color:white;
background-color: #006DFF;
margin: 1em;
padding: 0.30em 2em;
border: 2px solid ;
border-radius: 4px;
&:hover{
    opacity:0.6;
    transform:scale(0.98)
    

}
@media (max-width: ${({ theme }) => theme.mobile}) {
   
  }

`
export const Button1=styled.button`
background-color: gray;
color: white; 
border: none !important;
font-size: 1em;
margin: 1em;
padding: 0.30em 2em;
&:hover{
    opacity:0.9;
    transform:scale(0.98)
    

}
@media (max-width: ${({ theme }) => theme.mobile}) {
   
  }




`