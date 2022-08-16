import styled from "styled-components";
import {
  HeadingFour,
  HeadingThree,
  BodyText,
  HeadingFive,
} from "../components/Typography";
import crewImages from "../assets/crewImageImports";

const StyledCrew = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${crewImages.desktopBkg});
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    background-image: url(${crewImages.tabletBkg});
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    background-image: url(${crewImages.mobileBkg});
  }
`;

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    // padding: 85px 16px 16px;
    min-height: 200px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    flex-direction: column-reverse;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5%;
  max-width: 500px;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    min-height: 200px;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    flex-direction: column-reverse;
  }
`;

const MemberInfo = styled.div``;
const Role = styled(HeadingFour)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding-bottom: 16px;
  }
`;
const Name = styled(HeadingFive)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding: 8px 0px 16px;
    text-align: center;
  }
`;
const Bio = styled(BodyText)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding-bottom: 40px;
  }
`;
const Subnav = styled.div`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    margin: 0px auto;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    padding: 20px 0px;
  }
`;
const NavCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.offWhite};
  mix-blend-mode: normal;
  opacity: ${({ active }) => (active ? "1.0" : "0.17")};
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
`;
const FeaturedImage = styled.img`
  align-self: flex-end;
  width: 560px;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    align-self: center;
    width: 450px;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    width: 320px;
  }
`;
const Divider = styled.hr`
  border: 1px solid #979797;
  width: 90%;
  display: none;

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    display: block;
  }
`;

export {
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
};
