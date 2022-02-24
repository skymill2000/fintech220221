import React from "react";
import HeaderWhite from "../components/HeaderWhite";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const AuthResult = () => {
  console.log(useLocation().search);
  const parsedResult = queryString.parse(useLocation().search);
  console.log(parsedResult);
  return (
    <div>
      <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
    </div>
  );
};

export default AuthResult;
