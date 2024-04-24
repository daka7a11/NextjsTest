import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledSectionContainer,
  StyledContentContainer,
  StyledImageContainer,
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
          <StyledImageContainer></StyledImageContainer>
          <div>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
          </div>
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
