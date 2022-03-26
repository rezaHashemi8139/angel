
import styled from "styled-components";

export const StyledFieldContainer = styled.div`
  span{
    display:block;
    color:red;
    font-size:0.8rem;
    margin-bottom:5px
  }
  input{
    width: calc(100% - 1.5rem);
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0.6rem;
    margin: 0.4rem 0;
    border-radius: 4px;
    outline: none;
      &:focus{
      border-color: blue;
    }
      &.error{
      border-color: red;
    }
      &.success{
      border-color: green;
    }
}
`
