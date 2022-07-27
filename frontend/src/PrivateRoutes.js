import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ Children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return <div>{token && user ? Children : <Navigate to="/" />}</div>;
};

export default PrivateRoutes;
