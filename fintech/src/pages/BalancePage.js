import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import HeaderWhite from "../components/HeaderWhite";

const BalancePage = () => {
  const { fintechUseNo } = queryString.parse(useLocation().search);
  const [balance, setbalance] = useState("");
  console.log(fintechUseNo);

  const getUserBalance = () => {
    //   request 생성 / 응답을 text 출력
    const accessToken = localStorage.getItem("accessToken");
    const sendData = {};

    const option = {
      method: "",
      url: "",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {});
  };

  return (
    <div>
      <HeaderWhite title="잔액조회"></HeaderWhite>
    </div>
  );
};

export default BalancePage;
