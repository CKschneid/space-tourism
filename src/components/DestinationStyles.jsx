import styled from "styled-components";
import { HeadingTwo, NavText, BodyText } from "../components/Typography";
import destinationImages from "../assets/destinationImageImports";

const StyledDestination = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${destinationImages.desktopBkg});
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    background-image: url(${destinationImages.tabletBkg});
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    background-image: url(${destinationImages.mobileBkg});
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 10vh auto 0px;
  padding: 0px 5vw;
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    flex-direction: column;
  }
`;
const FeaturedImage = styled.img`
  width: 445px;
  height: 445px;
  padding-right: 5%;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    width: 300px;
    height: 300px;
    padding-right: 0px;
    margin-bottom: 50px;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    width: 170px;
    height: 170px;
  }
`;
const FeaturedInfo = styled.div`
  max-width: 450px;
`;
const Subnav = styled.div`
  display: flex;
  min-height: 24px;
  margin-bottom: 16px;
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    justify-content: center;
  }
`;
const SubnavText = styled(NavText)`
  cursor: pointer;
  margin-right: 16px;
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }

  border-bottom: ${(props) => (props.active ? "3px solid white" : "none")};
`;
const Title = styled(HeadingTwo)``;
const Info = styled(BodyText)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    max-width: 450px;
    padding: 16px;
  }
`;
const Divider = styled.hr`
  border: 1px solid #383b4b;
  margin: 50px 0px 30px;
`;
const Facts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    flex-direction: column;
  }
`;
const Fact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
`;

export {
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
};
