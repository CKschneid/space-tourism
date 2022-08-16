import { useState } from "react";
import styled from "styled-components";
import { SubheadingTwo, HeadingFour } from "../components/Typography";
import {
  StyledDestination,
  Container,
  FeaturedImage,
  FeaturedInfo,
  Subnav,
  SubnavText,
  Title,
  Info,
  Divider,
  Facts,
  Fact,
} from "../components/DestinationStyles";
import Header from "../components/SectionHeader";
import destinationImages from "../assets/destinationImageImports";
// data
import destinationsData from "../data/destinationsData";

const imageMap = {
  moon: destinationImages.moonImg,
  europa: destinationImages.europaImg,
  mars: destinationImages.marsImg,
  titan: destinationImages.titanImg,
};

const Destination = () => {
  const [featured, setFeatured] = useState(
    destinationsData.find((destination) => destination.name == "moon")
  );

  const handleClick = (clickedOn) => {
    const newFeatured = destinationsData.find(
      (destination) => destination.name == clickedOn
    );
    setFeatured(newFeatured);
  };
  return (
    <StyledDestination>
      <Header number="01" text="pick your destination" />
      <Container>
        <FeaturedImage src={imageMap[featured.name]} />
        <FeaturedInfo>
          <Subnav>
            {destinationsData.map((destination) => (
              <SubnavText
                key={destination.name}
                onClick={() => handleClick(destination.name)}
                active={destination.name == featured.name}
              >
                {destination.formattedName}
              </SubnavText>
            ))}
          </Subnav>
          <Title>{featured.name}</Title>
          <Info>{featured.description}</Info>
          <Divider />
          <Facts>
            <Fact>
              <SubheadingTwo>avg. distance</SubheadingTwo>

              <HeadingFour>{featured.distance}</HeadingFour>
            </Fact>

            <Fact>
              <SubheadingTwo>est. travel time</SubheadingTwo>

              <HeadingFour>{featured.travel}</HeadingFour>
            </Fact>
          </Facts>
        </FeaturedInfo>
      </Container>
    </StyledDestination>
  );
};

export default Destination;
