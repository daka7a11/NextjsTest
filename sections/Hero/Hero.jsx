import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledSectionContainer,
  StyledContentContainer,
  StyledImageContainer,
  StyledCard,
  StyledSelectionItemContainer,
  StyledSectionSubheading,
  StyledSectionParagraph,
  StyledIconContainer,
  StyledCardTextContainer,
  Highlight,
} from "./elements";

export const Hero = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledSectionContainer {...props}>
      <StyledContainer>
        <StyledTextContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <StyledContentContainer>
          <StyledImageContainer>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              objectFit="cover"
            />
          </StyledImageContainer>
          <StyledSelectionItemContainer>
            <StyledCard width="90%">
              <StyledIconContainer>
                <ion-icon
                  style={{ width: "40px", height: "40px" }}
                  name="construct-outline"
                ></ion-icon>
              </StyledIconContainer>
              <StyledCardTextContainer>
                <StyledSectionSubheading>Brief</StyledSectionSubheading>
                <StyledSectionParagraph>
                  Complete
                  <Highlight> brief writing or simple guidance</Highlight> on
                  what to include, we&apos;ve got you covered.
                </StyledSectionParagraph>
              </StyledCardTextContainer>
            </StyledCard>
            <StyledCard width="95%">
              <StyledIconContainer>
                <ion-icon
                  style={{ width: "40px", height: "40px" }}
                  name="search-outline"
                ></ion-icon>
              </StyledIconContainer>
              <StyledCardTextContainer>
                <StyledSectionSubheading>Search</StyledSectionSubheading>
                <StyledSectionParagraph>
                  In-depth agency search covering;{" "}
                  <Highlight>criteria matching</Highlight>, door knocking and
                  due-dilligence vetting.
                </StyledSectionParagraph>
              </StyledCardTextContainer>
            </StyledCard>
            <StyledCard>
              <StyledIconContainer>
                <ion-icon
                  style={{ width: "40px", height: "40px" }}
                  name="chatbubbles-outline"
                ></ion-icon>
              </StyledIconContainer>
              <StyledCardTextContainer>
                <StyledSectionSubheading>Pitch</StyledSectionSubheading>
                <StyledSectionParagraph>
                  Comprehesive <Highlight>pitch management</Highlight>,
                  including comms, diary management and pitch hosting.
                </StyledSectionParagraph>
              </StyledCardTextContainer>
            </StyledCard>
          </StyledSelectionItemContainer>
        </StyledContentContainer>
      </StyledContainer>
    </StyledSectionContainer>
  );
};

{
  /* <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledCTAContainer>
          <StyledGetStartedBtn>{ctaText}</StyledGetStartedBtn>
        </StyledCTAContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer> */
}
