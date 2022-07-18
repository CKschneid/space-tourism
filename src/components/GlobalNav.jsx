import { useState } from "react";
import styled from "styled-components";
import { NavText } from "./Typography";
import LogoSVG from "../assets/shared/logo.svg";
import { navData } from "../data/data";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
  right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    top: 0px;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
  }
`;

const Logo = styled.img`
  margin-left: 5%;
  margin-right: 5%;
  width: 48px;
  height: 48px;

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
  }
`;

const HamburgerIcon = styled.img`
  display: none;
`;
const CloseIcon = styled.img`
  display: none;
`;
const NavIcon = styled.img`
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    display: inline-block;
  }
`;
const Links = styled.ul`
  display: flex;
  flex-direction: row;
  padding-right: 10%;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    transform: translateX(500px);
    position: absolute;
    top: 0px;
    right: 0px;
    flex-direction: column;
  }
`;
const Link = styled.li`
  margin: 36px 36px 0px 36px;
  padding-bottom: 36px;
  border-bottom: ${({ active, theme }) =>
    `1 px solid ${theme.colors.offWhite}`};

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
  }
`;

const GlobalNav = () => {
  const [showMobileNav, setMobileNavVisibility] = useState(false);
  return (
    <Container>
      <Logo src={LogoSVG} />
      <NavIcon src={Hamburger} />
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

export default GlobalNav;
