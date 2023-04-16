import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Urls } from "shared/constants/url";
import Dashboard from "./Dashboard";
import CustomsOffices from "./CustomsOffices";
import TransitDeclaration from "./TransitDeclaration";
import Requests from "./Requests";

const PrivareRooter = () => {
  return (
    <Routes>
      <Route path={Urls.DASHBOARD_URL} element={<Dashboard />} />
      <Route path={Urls.CUSTOMS_OFFICES} element={<CustomsOffices />} />
      <Route
        path={Urls.TRANSIT_DECLARATION_URL}
        element={<TransitDeclaration />}
      />
      <Route path={Urls.REQUESTS_URL} element={<Requests />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default PrivareRooter;
