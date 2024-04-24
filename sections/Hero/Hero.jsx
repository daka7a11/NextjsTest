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
} from "./elements";

const selectionItems = [
  {
    icon: "https://static.wixstatic.com/media/6b881a_f893694de3864336a089dd5b4c7b2d6b~mv2.png/v1/fill/w_319,h_319,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/noun_design_2123403.png",
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
  },
  {
    icon: "icon2",
    title: "title2",
    description: "description2",
  },
];

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
          <StyledSelectionItemContainer selectionItems={selectionItems}>
            {selectionItems.map((item, i) => {
              const widthPercentage = `(${
                (selectionItems.length - 1 - i) * 5 - 100
              })%`;
              return (
                <StyledCard
                  key={item.title}
                  width={widthPercentage}
                  item={item}
                />
              );
            })}
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
