import React from "react";
import styled from "styled-components";

interface CardImageProps {
  image: string;
  alt: string;
}

const CardImage = ({ image, alt }: CardImageProps) => {
  return <img src={image} alt={alt} style={{ width: "100%" }} />;
};

interface CardSummaryProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const StyledCardSummary = styled.div`
  padding: 8px;
  box-sizing: border-box;
`;

const CardSummary = ({ title, children }: CardSummaryProps) => {
  return (
    <StyledCardSummary>
      <div>{title}</div>
      {children}
    </StyledCardSummary>
  );
};

interface CardActionProps {
  children: JSX.Element;
}

const CardAction = ({ children }: CardActionProps) => {
  return <div style={{ padding: 8, boxSizing: "border-box" }}>{children}</div>;
};

const StyledCard = styled.div`
  padding: 0;
  background-color: #f8f8f8;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgb(0, 0, 0, 0.25),
    0px 1px 1px 0px rgb(0, 0, 0, 0.14), 0px 1px 3px 0px rgb(0, 0, 0, 0.12);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    margin: 0;
    padding: 0;
  }
`;

interface CardProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export { CardAction, CardImage, CardSummary };
export default Card;
