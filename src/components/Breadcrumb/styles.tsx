import styled from "styled-components";

export const  StyledNavlinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
`

export const StyledNavlink = styled.li`
  font-weight: 400;
  margin: 0;
  padding: 0;

  a,
  span {
    color: inherit;
    text-decoration: none;
  }

  &:not(:last-child)::after {
    content: '/';
    display: inline-block;
    padding: 0 1rem;
  }
`