import { CircularProgress, styled } from "@mui/material";

import React from "react";
// import { styled } from "@material-ui/styles/index";

function Spinner({ color }) {
  const SyledCircularProgress = styled((props) => (
    <CircularProgress {...props} />
  ))({
    width: "unset !important",
    height: "unset !important",
    color: `${color ? color : "#ffffff"} `,
    "& .MuiCircularProgress-svg": {
      width: "22px",
      height: "22px",
    },
  });

  return <SyledCircularProgress />;
}

export default Spinner;
