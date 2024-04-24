import styled from "styled-components";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;
