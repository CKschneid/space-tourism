import styled from "styled-components";
import homeImages from "../assets/homeImageImports";
import { HeadingFive } from "./Typography";

const StyledHome = styled.div`
  background-image: url(${homeImages.desktopBkg});
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  min-height: 100vh;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    background-image: url(${homeImages.tabletBkg});
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    background-image: url(${homeImages.mobileBkg});
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 400px;
  justify-content: space-around;
  width: 100%;
  padding-top: 50vh;
  max-width: 1600px;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    position: static;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding-top: 150px;
  }
`;

const TextArea = styled.div`
  max-width: 450px;
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    padding: 5%;
  }
`;

const Subtitle = styled(HeadingFive)`
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
  }
`;
const ExploreButton = styled.div`
  margin-left: 60px;
  align-self: flex-end;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 36px solid rgba(240, 240, 240, 0);
  background-clip: padding-box;
  &:hover {
    border: 36px solid rgba(240, 240, 240, 0.1);
  }

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    margin-left: 0px;
    align-self: inherit;
    margin-top: 36px;
  }
`;

export { StyledHome, Container, TextArea, Subtitle, ExploreButton };
