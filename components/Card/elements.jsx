import styled from "styled-components";
import { SectionParagraph, SectionSubheading } from "../Typography";

export const StyledCard = styled(({ ...props }) => <div {...props} />)`
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export const StyledSectionSubheading = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))``;

export const StyledSectionParagraph = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))``;
