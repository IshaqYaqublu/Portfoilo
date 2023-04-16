import * as React from "react";
const SvgText = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.167 9.166v4.584c0 4.583-1.833 6.416-6.416 6.416h-5.5c-4.584 0-6.417-1.833-6.417-6.416v-5.5c0-4.584 1.833-6.417 6.417-6.417h4.583"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.167 9.166h-3.666c-2.75 0-3.667-.916-3.667-3.666V1.833l7.333 7.333ZM6.416 11.917h5.5M6.416 15.583h3.667"
    />
  </svg>
);
export default SvgText;
