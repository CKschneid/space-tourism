import styled from "styled-components";

const HeadingOne = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  color: ${({ theme }) => theme.colors.offWhite};
  text-transform: uppercase;
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    font-weight: 400;
    font-size: 80px;
    line-height: 100px;
  }
`;

const HeadingTwo = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  text-transform: uppercase;

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
    font-size: 80px;
    line-height: 92px;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    font-size: 56px;
    line-height: 64px;
  }
`;

const HeadingThree = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
  }
`;

const HeadingFour = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ dark, theme }) =>
    dark ? theme.colors.darkBlue : theme.colors.offWhite};
  opacity: ${({ blended }) => (blended ? "0.5" : "inherit")};
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1.5px;
  }
  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
  }
`;

const HeadingFive = styled.h5`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${({ blended }) => (blended ? "700" : "400")};
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: ${({ theme }) => theme.colors.grayBlue};
  text-transform: uppercase;
  mix-blend-mode: ${({ blended }) => (blended ? "normal" : "inherit")};
  opacity: ${({ blended }) => (blended ? "0.25" : "inherit")};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  margin-right: ${({ blended }) => (blended ? "28px" : "inherit")};
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 3.375px;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-align: center;
  }
`;

const NavText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.offWhite};
  margin-right: ${({ bold }) => (bold ? "16px" : "0px")};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    display: ${({ bold }) => (bold ? "none" : "inline")};
  }
`;

const SubheadingOne = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
`;

const SubheadingTwo = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
  display: inline;
`;

const BodyText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${({ blue, theme }) =>
    blue ? theme.colors.grayBlue : theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    text-align: center;
  }
`;

export {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  SubheadingOne,
  SubheadingTwo,
  BodyText,
  NavText,
};
