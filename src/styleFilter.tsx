import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 500px;
  margin:2rem;
`;


export const StyledButton = styled.button`
    display:block;
    width:100% ;
    border: none;
    opacity: 0.85;
    padding: 1rem 2rem;
    background-color: darkgreen;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    margin:  1rem 0;
    transition: all 300ms;
    &.cancel{
      background-color: darkred;
    }
    &:hover {
      opacity: 1;
    }
  
`


