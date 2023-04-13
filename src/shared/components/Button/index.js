import React from "react";
import styled from "styled-components";

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
}) => {
  const Button = styled.button`
    background: ${background};
    border-radius: 16px;
    padding: ${padding || "16px 24px"};
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0016em;
    color: ${color};
    border: ${border ? `2px solid ${border} !important` : "none"};
    &:disabled {
      opacity: 0.5;
    }
  `;

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      onChange={onChange}
      type={type}
    >
      {icon} {value}
    </Button>
  );
};

export default Button;
