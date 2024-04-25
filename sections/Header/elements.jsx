import styled from "styled-components";

export const StyledHeader = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.6rem;
  width: 100%;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
  }

  * {
    align-self: center;
  }

  .greeting {
    margin: 0;
    font-size: 1.2rem;
    margin-left: auto;
  }
`;
