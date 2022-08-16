import styled from "styled-components";
import { HeadingFive } from "./Typography";

const StyledSectionHeader = styled.div`
  padding: 212px 0px 0px 5%;

  width: 100%;
  @media (${({ theme }) => `max-width: ${theme.devices.tablet}`}) {
    padding: 136px 0px 20px 5%;
  }

  @media (${({ theme }) => `max-width: ${theme.devices.mobile}`}) {
    padding-top: 88px;
    padding: 88px 0px 20px 0px;
  }
`;

const Prefix = styled.span`
  opacity: 0.5;
`;
//"20vh 0px 10vh 5vw"
const SectionHeader = ({ number, text }) => {
  return (
    <StyledSectionHeader>
      <HeadingFive>
        <Prefix>{number}</Prefix>&nbsp;
        {text}
      </HeadingFive>
    </StyledSectionHeader>
  );
};

export default SectionHeader;
