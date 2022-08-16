import { useState } from "react";
import styled from "styled-components";
import { NavText } from "./Typography";
import LogoSVG from "../assets/shared/logo.svg";
import { navData } from "../data/navData";
import { NavLink as RouterLink } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 40px;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    top: 0px;
  }
`;

const Logo = styled.img`
  margin-left: 5%;
  margin-right: 5%;
  width: 48px;
  height: 48px;
`;
const Hr = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.25);
  width: 100%;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    display: none;
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding-right: 0px;
  }
`;
const Link = styled(RouterLink)`
  margin: 36px 12px 0px 36px;
  padding-bottom: 36px;
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
  &.active {
    border-bottom: 3px solid white;
  }
`;

const Nav = () => {
  return (
    <Container>
      <Logo src={LogoSVG} />
      <Hr />
      <Links>
        {navData.map((navItem) => {
          return (
            <Link to={navItem.text} key={navItem.text}>
              <NavText bold>{navItem.number}</NavText>
              <NavText>{navItem.text}</NavText>
            </Link>
          );
        })}
      </Links>
    </Container>
  );
};

export default Nav;
