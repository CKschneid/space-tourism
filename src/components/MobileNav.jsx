import { useState } from "react";
import styled from "styled-components";
import { NavText } from "./Typography";
import LogoSVG from "../assets/shared/logo.svg";
import { navData } from "../data/data";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

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
  z-index: 1;
`;

const Links = styled.ul`
  position: absolute;
  display: flex;
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
`;

const Link = styled.li`
  padding: 16px 0px 16px 0px;
  border-right: ${({ active, theme }) =>
    active ? `4px solid ${theme.colors.offWhite}` : "none"};
`;

const MobileNav = () => {
  const [isVisible, setNavVisibility] = useState(false);

  const handleClick = () => {
    console.log("nav visisibility prior to click: " + isVisible);
    setNavVisibility(!isVisible);
  };
  return (
    <>
      <Logo src={LogoSVG} />
      <NavIcon src={isVisible ? Close : Hamburger} onClick={handleClick} />
      <Links visible={isVisible}>
        {navData.map((navDataItem) => (
          <Link key={navDataItem.text}>
            <NavText bold>{navDataItem.number}</NavText>
            <NavText>{navDataItem.text}</NavText>
          </Link>
        ))}
      </Links>
    </>
  );
};

export default MobileNav;
