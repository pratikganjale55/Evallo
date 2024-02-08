import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ContentForm from "./components/ContentForm/ContentForm";
import ContentPreview from "./components/contentPreview/ContentPreview";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContentForm />} />
        <Route path="/content" element={<ContentPreview />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
