import React from "react";
import Cover from "shared/modules/Cover";
import { Urls } from "shared/constants/url";
import { Route, Routes } from "react-router-dom";
import Aux from "shared/modules/Auxilliary";
import SideMenu from "shared/layout/SideMenu";
import About from "./About";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Resume from "./Resume";
import Home from "./Home";

// const SideMenu = lazy(() => import("shared/layout/SideMenu"));
// const Aux = lazy(() => import("shared/modules/Auxilliary"));
// const About = lazy(() => import("./About"));
// const Certificates = lazy(() => import("./Certificates"));
// const Contact = lazy(() => import("./Contact"));
// const Portfolio = lazy(() => import("./Portfolio"));
// const Resume = lazy(() => import("./Resume"));

const Router = () => {
  return (
    // <Suspense fallback={<Spinner />}>

    <Aux>
      <SideMenu />
      <Cover>
        <Routes>
          <Route path={Urls.About_Page} element={<About />} />
          <Route path={Urls.Home_Page} element={<Home />} />
          <Route path={Urls.Portfolio_Page} element={<Portfolio />} />
          <Route path={Urls.Certificates_Page} element={<Certificates />} />
          <Route path={Urls.Contact_Page} element={<Contact />} />
          <Route path={Urls.Resume_Page} element={<Resume />} />
        </Routes>
      </Cover>
    </Aux>
    // </Suspense>
  );
};

export default Router;
