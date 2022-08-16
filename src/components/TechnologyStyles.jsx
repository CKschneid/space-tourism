import styled from "styled-components";
import { HeadingFour, NavText } from "./Typography";
import techImages from "../assets/technologyImageImports";

const StyledTechnology = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${techImages.desktopBkg});
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    background-image: url(${techImages.tabletBkg});
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    background-image: url(${techImages.mobileBkg});
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5vw;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    flex-direction: column-reverse;
    margin-left: 0px;
  }
  @media (min-width: 1440px) {
    justify-content: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 3%;
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    flex-direction: column;
    padding: 50px 0px 50px;
  }
`;
const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 80px;
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    flex-direction: row;
    justify-content: center;
    padding: 0px 0px 40px 0px;
  }
`;
const NavCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  &:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    margin-right: 16px;
    width: 60px;
    height: 60px;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    margin-right: 16px;
    width: 40px;
    height: 40px;
  }
`;

const NavNumber = styled(HeadingFour)`
  color: ${({ active, theme }) => (active ? theme.colors.darkBlue : "white")};
`;
const Info = styled.div`
  max-width: 470px;
  min-height: 340px;
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    padding: 0px 5vw;
  }
`;
const Subtitle = styled(NavText)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    display: block;
    text-align: center;
  }
`;
const FeaturedImage = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${({ name }) => techImages[name].portrait});

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    background-image: url(${({ name }) => techImages[name].landscape});
    width: 100%;
    height: 310px;
  }
`;

export {
  StyledTechnology,
  Container,
  Content,
  SubNav,
  NavCircle,
  NavNumber,
  Info,
  Subtitle,
  FeaturedImage,
};
