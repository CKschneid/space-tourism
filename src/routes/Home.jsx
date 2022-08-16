import {
  StyledHome,
  Container,
  TextArea,
  Subtitle,
  ExploreButton,
} from "../components/HomeStyles";
import {
  HeadingFive,
  HeadingOne,
  HeadingFour,
  BodyText,
} from "../components/Typography";

const Home = () => {
  return (
    <StyledHome>
      <Container>
        <TextArea>
          <Subtitle>so, you want to travel to</Subtitle>
          <HeadingOne>space</HeadingOne>
          <BodyText>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </BodyText>
        </TextArea>
        <ExploreButton>
          <HeadingFour dark>explore</HeadingFour>
        </ExploreButton>
      </Container>
    </StyledHome>
  );
};

export default Home;
