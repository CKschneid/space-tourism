import { useState } from "react";
import styled from "styled-components";
import { NavText } from "./Typography";
import LogoSVG from "../assets/shared/logo.svg";
import { navData } from "../data/data";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding-top: 0px;
  }
`;

const Logo = styled.img`
  margin-left: 5%;
  margin-right: 5%;
  width: 48px;
  height: 48px;
`;

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  padding-right: 10%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding-right: 0px;
  }
`;
const Link = styled.li`
  margin: 36px 12px 0px 36px;
  padding-bottom: 36px;
  border-bottom: ${({ active, theme }) => `1px solid ${theme.colors.offWhite}`};
`;

const Nav = () => {
  return (
    <Container>
      <Logo src={LogoSVG} />
      <Links>
        {navData.map((navItem) => {
          return (
            <Link key={navItem.text}>
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
