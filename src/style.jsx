import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 1rem;
  tr {
    text-align: center;
    border: 1px solid black;
  }
  th {
    padding: 2rem 1rem;
    border: 1px solid black;
  }
  td {
    border: 1px solid black;
    padding: 1rem;
  }
`;
export const StyledButton = styled.button`
  border: none;
  opacity: 0.85;
  padding: 1rem 2rem;
  background-color: darkgreen;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  margin: 3rem;
  transition: all 300ms;
  &:hover {
    opacity: 1;
  }
`;

export const StyledContainer = styled.div`
  padding: 3rem;
  i.fa {
    transition: all 300ms;
    padding: 1rem;
    cursor: pointer;
    &.fa-trash {
      color: red;
      &:hover {
        color: darkred;
      }
    }
    &.fa-edit {
      color: green;
      &:hover {
        color: darkgreen;
      }
    }
  }
`;
