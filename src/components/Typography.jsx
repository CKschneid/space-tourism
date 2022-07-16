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
`;

const HeadingTwo = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: ${({ centered }) => (centered ? "center" : "left")}
  text-transform: uppercase;
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
`;

const HeadingFour = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${({ dark, theme }) =>
    dark ? theme.colors.darkBlue : theme.colors.offWhite};
  opacity: ${({ blended }) => (blended ? "0.5" : "inherit")};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
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
  display: block;
  margin-right: ${({ blended }) => (blended ? "28px" : "inherit")};
  text-align: ${({ centered }) => (centered ? "center" : "left")};
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
  margin-left: 8px;
  text-align: ${({ centered }) => (centered ? "center" : "left")};
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
