import React from "react";

import styled from "styled-components";

const StyledFooter = styled.div`
  min-height: 48px;
  width: 100%;
  overflow: hidden;
`;

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}
const Footer = ({ className, children }: FooterProps) => {
  return <StyledFooter className={className}>{children}</StyledFooter>;
};

export default Footer;
