import { HeadingThree, BodyText, HeadingFour } from "../components/Typography";
import technologyData from "../data/technologyData";
import { useState } from "react";
import Header from "../components/SectionHeader";
import {
  StyledTechnology,
  Container,
  Content,
  SubNav,
  NavCircle,
  NavNumber,
  Info,
  Subtitle,
  FeaturedImage,
} from "../components/TechnologyStyles";

const Technology = () => {
  const [featured, setFeatured] = useState(technologyData[0]);

  const handleClick = (selection) => {
    const newFeatured = technologyData.find(
      (techItem) => techItem.name == selection
    );
    setFeatured(newFeatured);
  };
  return (
    <StyledTechnology>
      <Header number="03" text="space launch 101" />

      <Container>
        <Content>
          <SubNav>
            {technologyData.map((techItem, index) => (
              <NavCircle
                key={techItem.name}
                onClick={() => handleClick(techItem.name)}
                active={techItem.name == featured.name ? true : false}
              >
                <NavNumber
                  active={techItem.name == featured.name ? true : false}
                >
                  {index + 1}
                </NavNumber>
              </NavCircle>
            ))}
          </SubNav>
          <Info>
            <Subtitle>THE TERMINOLOGY</Subtitle>
            <HeadingThree>{featured.fullName}</HeadingThree>
            <BodyText>{featured.description}</BodyText>
          </Info>
        </Content>
        <FeaturedImage name={featured.name} />
      </Container>
    </StyledTechnology>
  );
};
export default Technology;
