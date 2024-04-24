import { StyledCard } from "./elements";
import { StyledSectionSubheading, StyledSectionParagraph } from "./elements";

export const Card = ({ item, ...props }) => {
  console.log(item);
  return (
    <StyledCard {...props}>
      <StyledSectionSubheading>{item.title}</StyledSectionSubheading>
      <StyledSectionParagraph>{item.description}</StyledSectionParagraph>
    </StyledCard>
  );
};
