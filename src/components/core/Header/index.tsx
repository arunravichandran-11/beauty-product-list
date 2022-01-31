import React from "react";
import styled from "styled-components";
import brandLogo from "./images.png";

const StyledHeader = styled.div`
  height: 64px;
  // background-color: skyblue;
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: bold;
  position: sticky;
  top: 0px;
  padding: 0px 16px;
  box-sizing: border-box;
  z-index: 2;
  & > div {
    height: 100%;
    display: flex;
  }
`;

const StyledLogo = styled.img`
  width: 90px;
  cursor: pointer;
`;

const StyledHeaderContentSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding-left: 32px;
`;

interface HeaderProps {
  logo?: string;
  className?: string;
  children?: React.ReactNode;
}

const Header = ({ logo, className, children }: HeaderProps) => {
  return (
    <StyledHeader className={className}>
      <div>
        <StyledLogo src={logo || brandLogo} alt="brand-logo" />
      </div>
      {children && (
        <StyledHeaderContentSection>{children}</StyledHeaderContentSection>
      )}
    </StyledHeader>
  );
};

export default Header;
