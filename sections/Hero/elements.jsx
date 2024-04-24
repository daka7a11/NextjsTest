import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  ContentContainer,
  Card,
} from "~/components";
import { SelectionItemContainer } from "../../components/Containers/SelectionItemsContainer/SelectionItemContainer";

export const StyledSectionContainer = styled(
  ({ backgroundImageUrl, height, ...props }) => <SectionContainer {...props} />
)`
  margin: 0;
  padding: 0;
  height: 98vh;
  background-image: url(${({ backgroundImageUrl }) => backgroundImageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const StyledContainer = styled(
  ({ backgroundImageUrl, height, ...props }) => <div {...props} />
)`
  width: 65%;
  margin: 5rem auto;
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <ContentContainer {...props} />
))`
  background-color: blue;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  padding: 0.2rem;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))``;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 3rem;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: 100%;
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)``;

export const StyledSelectionItemContainer = styled(
  ({ selectionItems, ...props }) => (
    <SelectionItemContainer selectionItems={selectionItems} {...props} />
  )
)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;
