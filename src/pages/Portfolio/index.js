import React from "react";
import { Link } from "react-router-dom";
import { Urls } from "shared/constants/url";

const Portfolio = () => {
  return (
    <div>
      <Link to={Urls.Portfolio_Page}>Portfolio</Link>
    </div>
  );
};

export default Portfolio;
