import * as React from "react";
const SvgMessages = (props) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.481 9.89v3.667c0 .239-.009.468-.036.688-.211 2.475-1.669 3.703-4.354 3.703h-.367c-.23 0-.45.11-.587.294l-1.1 1.466c-.486.651-1.274.651-1.76 0l-1.1-1.466a.846.846 0 0 0-.586-.294h-.367c-2.924 0-4.391-.724-4.391-4.39V9.89c0-2.686 1.238-4.143 3.703-4.354.22-.028.45-.037.688-.037h5.867c2.924 0 4.39 1.467 4.39 4.39Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.149 6.224V9.89c0 2.694-1.238 4.143-3.704 4.354.028-.22.037-.45.037-.688V9.891c0-2.925-1.467-4.391-4.39-4.391H6.224c-.239 0-.468.009-.688.036.21-2.465 1.668-3.703 4.354-3.703h5.867c2.924 0 4.39 1.467 4.39 4.39Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.371 12.146h.008M9.162 12.146h.008M5.954 12.146h.008"
    />
  </svg>
);
export default SvgMessages;
