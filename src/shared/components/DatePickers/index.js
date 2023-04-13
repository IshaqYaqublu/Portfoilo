import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { az } from "date-fns/locale";
import { Calendar } from "../Icons";

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 56px;
  border-radius: var(--space-x1);
  border: none;
  padding: 12px 24px;
  padding-left: 40px;
  color: #495673;
  background: #f5f5f8;
`;
const StyledDiv = styled.div`
  position: relative;
  svg {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    margin-left: 12px;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
  }
`;
const DatePickers = ({
  onChange,
  selected,
  excludeDates,
  placeholderText,
  minDate,
  maxDate,
  readOnly,
}) => {
  return (
    <div className="datepicker-design input-position">
      <StyledDiv className="datepicker-design input-position">
        <StyledDatePicker
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
          selected={selected}
          placeholderText={placeholderText}
          excludeDates={excludeDates}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          readOnly={readOnly}
          showPopperArrow={false}
          locale={az}
          dateFormat="yyyy-MM-dd"
        />
        <Calendar />
      </StyledDiv>
    </div>
  );
};

export default DatePickers;
