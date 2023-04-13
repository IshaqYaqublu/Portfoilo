import React from "react";
import Cover from "shared/modules/Cover";
import { Urls } from "shared/constants/url";
import { Route, Routes } from "react-router-dom";
import Aux from "shared/modules/Auxilliary";
import SideMenu from "shared/layout/SideMenu";
import Home from "./Home";
import Header from "shared/layout/Header";

const Router = () => {
  return (
    <Aux>
      <SideMenu />
      <Cover>
        <Header />
        <Routes>
          <Route path={Urls.Home_Page} element={<Home />} />
        </Routes>
      </Cover>
    </Aux>
  );
};

export default Router;
