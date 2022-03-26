import styled from "styled-components";

interface IContainer {
  readonly open: boolean
}

export const StyledContainer = styled.div<IContainer>`
  transition:all 0.3s;
  top:${props => props.open ? '0' : '100%'};
  position: fixed ;
  width: 100vw;
  height: 100vh;
  background-color:rgba(0,0,0,0.6);
  display:flex;
  align-items:center;
  justify-content:center;
  & > div{
    position: relative;
    background-color: white;
    border-radius: 4px;
    overflow-x: hidden;
    overflow-y: auto;
    width:300px;
    padding:2rem 1rem 1rem 1rem;
    i{
      position:absolute ;
      cursor: pointer;
      opacity:0.8;
      top:1rem;
      right:1rem;
      &:hover{
        color:red ;
      }
    }
  }
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


