import crewData from "../data/crewData";
import { useState } from "react";
import Header from "../components/SectionHeader";
import crewImages from "../assets/crewImageImports";
import {
  StyledCrew,
  Container,
  Content,
  MemberInfo,
  Role,
  Name,
  Bio,
  Subnav,
  NavCircle,
  FeaturedImage,
  Divider,
} from "../components/CrewStyles";

const Crew = () => {
  const [featured, setFeatured] = useState(
    crewData.find((d) => d.name == "hurley")
  );

  const handleClick = (name) => {
    const newFeatured = crewData.find((d) => d.name == name);
    setFeatured(newFeatured);
  };
  return (
    <StyledCrew>
      <Header variant number="02" text="meet your crew" />
      <Container>
        <Content>
          <MemberInfo>
            <Role>{featured.role}</Role>
            <Name>{featured.fullName}</Name>
            <Bio>{featured.bio}</Bio>
          </MemberInfo>
          <Subnav>
            {crewData.map((d) => (
              <NavCircle
                key={d.name}
                active={d.name == featured.name ? true : false}
                onClick={() => handleClick(d.name)}
              />
            ))}
          </Subnav>
        </Content>
        <Divider />
        <FeaturedImage src={crewImages[featured.name]} />
      </Container>
    </StyledCrew>
  );
};

export default Crew;
