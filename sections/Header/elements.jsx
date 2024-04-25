import styled from "styled-components";

export const StyledHeader = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
  }
`;
