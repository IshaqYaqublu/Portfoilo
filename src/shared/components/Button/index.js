import React from "react";
import styled from "styled-components";
import RenderIf from "../RenderIf";
import Spinner from "../Spinner";

const StyledButton = styled.button`
  background: ${(props) => props.background};
  border-radius: 16px;
  padding: ${(props) => props.padding || "16px 24px"};
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0016em;
  color: ${(props) => props.color};
  border: ${(props) =>
    props.border ? `2px solid ${props.border} !important` : "none"};
  &:disabled {
    opacity: 0.5;
  }
`;

const Button = ({
  onClick,
  disabled,
  onChange,
  type,
  background,
  padding,
  color,
  border,
  icon,
  value,
  isLoading,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      type={type}
      background={background}
      padding={padding}
      color={color}
      border={border}
    >
      <RenderIf condition={isLoading}>
        <Spinner />
      </RenderIf>
      <RenderIf condition={!isLoading}>
        {icon} {value}
      </RenderIf>
    </StyledButton>
  );
};

export default Button;
