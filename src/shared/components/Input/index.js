import React from "react";
import styled from "styled-components";
import { Search } from "../Icons";
import styles from "./Input.module.scss";
import RenderIf from "../RenderIf";
const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #dadcde;
  border-radius: 12px;
  padding: 14px 16px 14px ${(props) => (props.icon ? "54px" : "16px")};
  // @include all-design(#051327, 16px, normal, 400, 24px);
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.0016em;
  color: #051327;
  &:focus {
    outline: none;
  }
  &:placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0016em;
    color: #051327;
  }
`;

const Input = ({
  placeholder,
  onChange,
  onClick,
  disabled,
  name,
  type,
  value,
  id,
  className,
  icon,
}) => {
  return (
    <div className={icon ? styles.Input : "w-100"}>
      <StyledInput
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        disabled={disabled}
        name={name}
        type={type}
        value={value}
        id={id}
        className={className}
      />
      <RenderIf condition={icon}>
        <Search />
      </RenderIf>
    </div>
  );
};

export default Input;
