import React from "react";

const RenderIf = ({ condition, children, renderElse = "" }) => {
  if (condition) return <>{children}</>;
  return <>{renderElse}</>;
};

export default RenderIf;
