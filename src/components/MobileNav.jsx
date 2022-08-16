import { useState } from "react";
import styled from "styled-components";
import { NavText } from "./Typography";
import LogoSVG from "../assets/shared/logo.svg";
import { navData } from "../data/navData";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { NavLink as RouterLink } from "react-router-dom";

const Logo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
`;

const NavIcon = styled.img`
  position: absolute;
  top: 33px;
  right: 24px;
  z-index: 2;
  cursor: pointer;
`;

const Links = styled.div`
  position: absolute;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  top: 0px;
  right: 0px;
  width: 70%;
  height: 100vh;
  padding: 120px 0px 0px 32px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  transform: ${({ visible }) =>
    visible ? "translateX(0px)" : "translateX(500px)"};
  transition: transform 1s ease-in-out;
  z-index: 1;
`;

const Link = styled(RouterLink)`
  padding: 16px 0px 16px 0px;

  &:hover {
    border-right: 4px solid rgba(255, 255, 255, 0.5);
  }
  &.active {
    border-right: 4px solid white;
  }
`;

const MobileNav = () => {
  const [isVisible, setNavVisibility] = useState(false);

  const handleIconClick = () => {
    setNavVisibility(!isVisible);
  };

  const handleLinkClick = () => {
    setNavVisibility(false);
  };
  return (
    <>
      <Logo src={LogoSVG} />
      <NavIcon src={isVisible ? Close : Hamburger} onClick={handleIconClick} />
      <Links visible={isVisible}>
        {navData.map((navDataItem) => (
          <Link
            key={navDataItem.text}
            to={navDataItem.text}
            onClick={handleLinkClick}
          >
            <NavText bold>{navDataItem.number}</NavText>
            <NavText>{navDataItem.text}</NavText>
          </Link>
        ))}
      </Links>
    </>
  );
};

export default MobileNav;
