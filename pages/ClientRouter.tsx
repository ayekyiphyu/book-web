import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page404 from "./404";

export const ClientRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="/" element="" />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
