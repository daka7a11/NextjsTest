import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  ContentContainer,
  Card,
  SectionParagraph,
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

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <ContentContainer {...props} />
))`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  padding: 0.2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;

  @media only screen and (max-width: 600px) {
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  @media only screen and (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

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
  overflow: hidden;
  border-radius: 6px;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;

  transition: ease all 0.3s;

  @media only screen and (max-width: 1024px) {
    width: 40%;
    justify-self: center;
  }

  @media only screen and (max-width: 800px) {
    width: 60%;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

export const StyledSelectionItemContainer = styled(
  ({ selectionItems, ...props }) => (
    <SelectionItemContainer selectionItems={selectionItems} {...props} />
  )
)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 1rem;
  align-items: space-around;
  justify-content: center;
`;

export const StyledCard = styled(({ ...props }) => <Card {...props} />)`
  width: ${(props) => (props.width ? props.width : "100%")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ""};
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 5px;

  min-height: 6rem;

  &:hover {
    border: 2px solid #1378fc;
    cursor: pointer;
  }

  &:hover .subheading {
    text-decoration: underline;
    text-decoration-color: #1378fc;
    color: #1378fc;
  }
`;

export const StyledSectionSubheading = styled(({ ...props }) => (
  <SectionSubheading {...props} />
))`
  font-weight: 600;
  line-height: 0;
  margin: 0;

  @media only screen and (max-width: 470px) {
    font-size: 1rem;
  }
`;

export const StyledSectionParagraph = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
  line-height: 1.3rem;
  font-size: 0.9rem;
  @media only screen and (max-width: 470px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const StyledIconContainer = styled(({ ...props }) => <div {...props} />)`
  justify-self: center;
`;

export const StyledCardTextContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 90%;
  height: 100%;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Highlight = styled(({ ...props }) => <span {...props} />)`
  font-weight: bold;
`;
