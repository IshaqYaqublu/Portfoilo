import React from "react";
import { RenderIf } from "shared/components";
import PrivareRooter from "./PrivareRooter";
import Aux from "shared/modules/Auxilliary";
import SideMenu from "shared/layout/SideMenu";
import Cover from "shared/modules/Cover";
import Header from "shared/layout/Header";
import Login from "pages/Landing/Login";
import Auth from "shared/modules/Auth";
import { Routes } from "react-router-dom";

const Router = () => {
  let token = false;
  return (
    <Aux>
      <RenderIf condition={!token}>
        <Routes>
          <Auth>
            <Login />
          </Auth>
        </Routes>
      </RenderIf>
      <RenderIf condition={token}>
        <SideMenu />
        <Cover>
          <Header />
          <PrivareRooter />
        </Cover>
      </RenderIf>
    </Aux>
  );
};

export default Router;
